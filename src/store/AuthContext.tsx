import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import {
    firestoreGetUser,
    firebaseSaveUser,
    firebaseEmailAndPasswordSignIn,
    firebaseEmailPasswordCreateUser,
    firebaseSignOut,
    firebaseCreateAnonimousUser,
} from '../services/firebaseService';

import { googleSignIn } from '../services/googleService';
import { IAppUser } from '../utils/interfaces';
import { generateUUID } from '../utils/helpers';

export interface IAuthContextProviderProps {
    children: ReactNode;
}

export interface IAuthContext {
    user: IAppUser | null;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (username: string, email: string, password: string) => Promise<void>;
    googleSignIn: () => Promise<boolean>;
    facebookSignIn: () => Promise<void>;
    logOut: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({
    user: null,
    signIn: (email: string, password: string) => new Promise((resolve, reject) => {}),
    signUp: (username: string, email: string, password: string) =>
        new Promise((resolve, reject) => {}),
    googleSignIn: () => new Promise(Boolean),
    facebookSignIn: () => new Promise((resolve, reject) => {}),
    logOut: () => new Promise((resolve, reject) => {}),
});

export function AuthContextProvider({ children }: IAuthContextProviderProps) {
    const [user, setUser] = useState<IAppUser | null>(null);
    const userStorage = useAsyncStorage('user');

    async function handleSignIn(email: string, password: string) {
        try {
            const userCredentials = await firebaseEmailAndPasswordSignIn(email, password);

            if (userCredentials) {
                const user = await firestoreGetUser(email);
                setUser(u => user);
                storeUser(user);
            }
            // return true;
        } catch (err) {
            throw new Error(
                `Não foi possível logar. Verifique a combinação email/senha e tente novamente. ERRO: ${err}`
            );
        }
    }

    async function handleSignUp(username: string, email: string, password: string) {
        try {
            const userCredentials = await firebaseEmailPasswordCreateUser(email, password);

            if (userCredentials) {
                const newUser: IAppUser = {
                    id: '',
                    email,
                    name: username || '',
                    avatarUrl: userCredentials.user.photoURL || '',
                    phone: userCredentials.user.phoneNumber || '',
                };

                await firebaseSaveUser(newUser as IAppUser);
                setUser(newUser);
                storeUser(newUser);
            }
        } catch (err) {
            throw new Error(`Não foi possível criar o usuário. ERRO: ${err}`);
        }
    }

    async function handleGoogleSignIn() {
        try {
            const userCredentials = await googleSignIn(); // mock
            console.log(userCredentials);
            if (userCredentials) {
                const { email, name, picture } = userCredentials;
                const newUser: IAppUser = {
                    id: '',
                    email,
                    name: name || '',
                    avatarUrl: picture || '',
                };

                const userExists = await firestoreGetUser(email); // mock
                console.log('user exists: ' + !!userExists, userExists);

                if (!userExists) {
                    await firebaseSaveUser(newUser as IAppUser);
                    await firebaseCreateAnonimousUser();
                }

                setUser(newUser);
                storeUser(newUser);
            }
            return true;
        } catch (err) {
            throw new Error(`Erro no GoogleSignin em AuthContext. ERRO: ${err}`);
        }
    }

    async function handleFacebookSignIn() {
        await new Promise(() => {});
    }

    async function handleLogout() {
        await firebaseSignOut();
        setUser(null);
        clearStorage();
    }

    // AsyncStorage
    // TODO: Abstract AsyncStorage Logics to a separate service

    function retrieveUser() {
        userStorage.getItem((err, data) => {
            if (!data) return;

            const userData = JSON.parse(data as string) as IAppUser;
            setUser(userData);

            if (err) {
                console.log(err);
            }
        });
    }

    async function storeUser(user: IAppUser) {
        const strUser = JSON.stringify(user);
        await userStorage.setItem(strUser, err => console.log('ERROR: ' + err));

        // const savedUser = await userStorage.getItem();
        // console.log('user added to localstorage :', savedUser);
    }

    async function clearStorage() {
        await userStorage.removeItem();
    }

    useEffect(() => {
        retrieveUser();
    }, []);

    const context: IAuthContext = {
        user,
        signIn: handleSignIn,
        signUp: handleSignUp,
        googleSignIn: handleGoogleSignIn,
        facebookSignIn: handleFacebookSignIn,
        logOut: handleLogout,
    };

    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => {
    return useContext(AuthContext);
};

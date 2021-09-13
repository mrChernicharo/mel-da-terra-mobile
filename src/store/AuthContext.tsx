import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

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
import {
    asyncStorageAddUser,
    asyncStorageRetrieveUser,
    clearAsyncStorage,
} from '../services/asyncStorageService';

export interface IAuthContextProviderProps {
    children: ReactNode;
}

export interface IAuthContext {
    user: IAppUser | null;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (username: string, email: string, password: string) => Promise<void>;
    googleSignIn: () => Promise<void>;
    logOut: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({
    user: null,
    signIn: (email: string, password: string) => new Promise((resolve, reject) => {}),
    signUp: (username: string, email: string, password: string) =>
        new Promise((resolve, reject) => {}),
    googleSignIn: () => new Promise((resolve, reject) => {}),
    logOut: () => new Promise((resolve, reject) => {}),
});

export function AuthContextProvider({ children }: IAuthContextProviderProps) {
    const [user, setUser] = useState<IAppUser | null>(null);
    // const userStorage = useAsyncStorage('user');

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
            if (userCredentials) {
                const { email, name, picture } = userCredentials;
                const newUser: IAppUser = {
                    id: '',
                    email,
                    name: name || '',
                    avatarUrl: picture || '',
                };

                const userExists = await firestoreGetUser(email); // mock

                if (!userExists) {
                    await firebaseSaveUser(newUser as IAppUser);
                    await firebaseCreateAnonimousUser();
                }

                setUser(newUser);
                storeUser(newUser);
            }
        } catch (err) {
            throw new Error(`Erro no GoogleSignin em AuthContext. ERRO: ${err}`);
        }
    }

    async function handleLogout() {
        await firebaseSignOut();
        setUser(null);
        clearStorage();
    }

    // AsyncStorage
    // TODO: Abstract AsyncStorage Logics to a separate service

    async function retrieveUser() {
        const userInfo = await asyncStorageRetrieveUser();
        console.log('retrieved user', userInfo);
        setUser(u => userInfo);
    }

    async function storeUser(user: IAppUser) {
        await asyncStorageAddUser(user);
    }

    async function clearStorage() {
        await clearAsyncStorage();
        // await userStorage.removeItem();
    }

    useEffect(() => {
        retrieveUser();
    }, []);

    const context: IAuthContext = {
        user,
        signIn: handleSignIn,
        signUp: handleSignUp,
        googleSignIn: handleGoogleSignIn,
        logOut: handleLogout,
    };

    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => {
    return useContext(AuthContext);
};

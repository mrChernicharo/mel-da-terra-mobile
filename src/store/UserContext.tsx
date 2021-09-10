import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import {
    getFirestoreUser,
    firebaseSaveUser,
    firebaseEmailAndPasswordSignIn,
    firebaseEmailPasswordCreateUser,
    firebaseSignOut,
    firebaseGoogleSignIn,
} from '../utils/fireService';
import { IAppUser } from '../utils/interfaces';

export interface IUserContextProviderProps {
    children: ReactNode;
}

export interface IUserContext {
    user: IAppUser | null;
    signIn: (email: string, password: string) => Promise<boolean>;
    signUp: (username: string, email: string, password: string) => Promise<boolean>;
    googleSignIn: () => Promise<void>;
    facebookSignIn: () => Promise<void>;
    logOut: () => Promise<void>;
}

export const UserContext = createContext<IUserContext>({
    user: null,
    signIn: (email: string, password: string) => new Promise(Boolean),
    signUp: (username: string, email: string, password: string) => new Promise(Boolean),
    googleSignIn: () => new Promise((resolve, reject) => {}),
    facebookSignIn: () => new Promise((resolve, reject) => {}),
    logOut: () => new Promise((resolve, reject) => {}),
});

export function UserContextProvider({ children }: IUserContextProviderProps) {
    const [user, setUser] = useState<IAppUser | null>(null);
    const userStorage = useAsyncStorage('user');

    async function handleSignIn(email: string, password: string) {
        try {
            const userCredentials = await firebaseEmailAndPasswordSignIn(email, password);

            if (userCredentials) {
                const user = await getFirestoreUser(email);
                setUser(u => user);
                storeUser(user);
            }
            return true;
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
            return true;
        } catch (err) {
            throw new Error(`Não foi possível criar o usuário. ERRO: ${err}`);
        }
    }

    async function handleGoogleSignIn() {
        // await new Promise(() => {});
        const cred = await firebaseGoogleSignIn();
        console.log(cred);
    }
    async function handleFacebookSignIn() {
        await new Promise(() => {});
        // return new Promise((resolve, reject) => {
        //     resolve(true);
        // });
    }

    async function handleLogout() {
        await firebaseSignOut();
        setUser(null);
        clearStorage();
    }

    // AsyncStorage

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
        await userStorage.setItem(strUser, err => console.log(err));

        const savedUser = await userStorage.getItem();
        console.log('user added to localstorage :', savedUser);
    }

    async function clearStorage() {
        await userStorage.removeItem();
    }

    useEffect(() => retrieveUser(), []);

    useEffect(() => {
        console.log('UserContext says: ', user);
    }, [user]);

    const context: IUserContext = {
        user,
        signIn: handleSignIn,
        signUp: handleSignUp,
        googleSignIn: handleGoogleSignIn,
        facebookSignIn: handleFacebookSignIn,
        logOut: handleLogout,
    };

    return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
};

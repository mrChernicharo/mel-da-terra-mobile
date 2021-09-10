import React, { createContext, useState, useEffect } from 'react';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import {
    getFirestore,
    Firestore,
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    documentId,
    where,
    query,
} from 'firebase/firestore/lite';
import { FirebaseApp } from '@firebase/app';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { IAppUser } from '../utils/interfaces';
import { getFirestoreUser, firebaseSaveUser } from '../utils/firestore';

export interface IUserContextProviderProps {
    children: JSX.Element[] | JSX.Element;
}

// prettier-ignore
export interface IUserContext {
	user: IAppUser | null;
	signIn: (email: string, password: string) => Promise<boolean>;
	signUp: (username: string, email: string, password: string) => Promise<boolean>;
	logOut: () => void;
}

export const UserContext = createContext<IUserContext>({
    user: null,
    signIn: (email: string, password: string) => new Promise(Boolean),
    signUp: (username: string, email: string, password: string) => new Promise(Boolean),
    logOut: () => {},
});

export function UserContextProvider({ children }: IUserContextProviderProps) {
    const [user, setUser] = useState<IAppUser | null>(null);
    const userStorage = useAsyncStorage('user');

    async function handleSignIn(email: string, password: string) {
        try {
            const userCredentials = await signInWithEmailAndPassword(getAuth(), email, password);

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
            const userCredentials = await createUserWithEmailAndPassword(
                getAuth(),
                email,
                password
            );

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

    async function handleLogout() {
        await signOut(getAuth());
        setUser(null);
        clearStorage();
    }

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
        logOut: handleLogout,
    };

    return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
}

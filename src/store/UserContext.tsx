import React, { createContext, useState } from 'react';
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
} from 'firebase/firestore/lite';
import { FirebaseApp } from '@firebase/app';

export interface IAppUser {
	id: string | null;
	name: string | null;
	email: string | null;
	phone?: string | null;
	avatarUrl?: string | null;
}

export interface IUserContextProviderProps {
	app: FirebaseApp;
	children: JSX.Element[] | JSX.Element;
}

export interface IUserContext {
	user: IAppUser | null;
	signIn: (email: string, password: string) => void;
	signUp: (username: string, email: string, password: string) => void;
	logOut: () => void;
}

export const UserContext = createContext<IUserContext>({
	user: null,
	signIn: (email: string, password: string) => {},
	signUp: (username: string, email: string, password: string) => {},
	logOut: () => {},
});

export function UserContextProvider({
	app,
	children,
}: IUserContextProviderProps) {
	const [user, setUser] = useState<IAppUser | null>(() => getUser());

	function getUser(): IAppUser | null {
		const currentUser = getAuth(app).currentUser;

		let user: IAppUser | null = null;

		if (currentUser) {
			const { uid, displayName, email, photoURL, phoneNumber } =
				currentUser;

			user = {
				id: uid,
				name: displayName,
				email,
				avatarUrl: photoURL,
				phone: phoneNumber,
			};
		}

		console.log(user);
		return user;
	}

	async function handleSignIn(email: string, password: string) {
		try {
			const userCredentials = await signInWithEmailAndPassword(
				getAuth(),
				email,
				password
			);
			console.log(userCredentials);
			if (userCredentials) setUser(getUser());
			console.log(user);
		} catch (err) {
			throw new Error(
				`Não foi possível logar. Verifique a combinação email/senha e tente novamente.
				 ERRO: ${err}`
			);
		}
	}

	async function handleSignUp(
		username: string,
		email: string,
		password: string
	) {
		console.log(username, email, password);
		try {
			const userCredentials = await createUserWithEmailAndPassword(
				getAuth(),
				email,
				password
			);
			console.log(userCredentials);

			if (userCredentials) setUser(getUser());
		} catch (err) {
			throw new Error(
				`Não foi possível logar. Verifique a combinação email/senha e tente novamente.
			 ERRO: ${err}`
			);
		}
	}
	function handleLogout() {
		// signOut(getAuth());
	}

	const context: IUserContext = {
		user,
		signIn: handleSignIn,
		signUp: handleSignUp,
		logOut: handleLogout,
	};

	return (
		<UserContext.Provider value={context}>{children}</UserContext.Provider>
	);
}

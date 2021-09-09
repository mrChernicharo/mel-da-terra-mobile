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
	signUp: (
		username: string,
		email: string,
		password: string
	) => Promise<boolean>;
	logOut: () => void;
}

export const UserContext = createContext<IUserContext>({
	user: null,
	signIn: (email: string, password: string) => {},
	signUp: (username: string, email: string, password: string) =>
		new Promise(Boolean),
	logOut: () => {},
});

export function UserContextProvider({
	app,
	children,
}: IUserContextProviderProps) {
	const [user, setUser] = useState<IAppUser | null>(null);

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
		console.log('getUser: ' + JSON.stringify(user));

		return user;
	}

	async function handleSignIn(email: string, password: string) {
		try {
			const userCredentials = await signInWithEmailAndPassword(
				getAuth(),
				email,
				password
			);

			if (userCredentials) {
				setUser(u => getUser());
			}
		} catch (err) {
			throw new Error(
				`Não foi possível logar. Verifique a combinação email/senha e tente novamente. ERRO: ${err}`
			);
		}
	}

	async function handleSignUp(
		username: string,
		email: string,
		password: string
	) {
		// console.log(username, email, password);
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
				setUser(newUser);

				await saveUser(getFirestore(), newUser as IAppUser);
			}
			return true;
		} catch (err) {
			throw new Error(`Não foi possível criar o usuário. ERRO: ${err}`);
		}
	}

	async function handleLogout() {
		console.log(getFirestoreUsers(getFirestore(app)));

		await signOut(getAuth());
		console.log(getUser());
	}

	// useEffect(() => {
	// 	getUser();
	// }, []);

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

async function getFirestoreUsers(db: Firestore) {
	const usersCollection = collection(db, 'users');
	const usersSnapshot = await getDocs(usersCollection);
	const usersList = usersSnapshot.docs.map(doc => doc.data());
	console.log(usersList);
}

async function getFirestoreUser(db: Firestore, id: string) {
	const usersCollection = collection(db, 'users');
	const usersSnapshot = await getDocs(usersCollection);
	const user = usersSnapshot.docs.find(doc => doc.data().id === id);

	console.log(user);
}

async function saveUser(db: Firestore, user: IAppUser) {
	try {
		const usersCollection = collection(db, 'users');
		const addedUserDoc = await addDoc(usersCollection, {});
		const userID = addedUserDoc.id;
		const updatedUser = { ...user, id: userID };
		await updateDoc(addedUserDoc, updatedUser);

		console.log('created user: ', JSON.stringify(updatedUser));
	} catch (err) {
		throw new Error('Erro ao gurardar usuário no Banco de dados');
	}
}

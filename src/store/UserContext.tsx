import React, { createContext, useState } from 'react';
import {
	getFirestore,
	Firestore,
	collection,
	getDocs,
} from 'firebase/firestore/lite';

export interface IAppUser {
	id?: string;
	name: string;
	email: string;
	avatarUrl?: string;
}

export interface IUserContext {
	user: IAppUser | null;
}

export interface IUserContextProviderProps {
	app: any;
	children: JSX.Element[] | JSX.Element;
}

const dummyUser: IAppUser = {
	id: '91038qwh9f8yiu4133b',
	name: 'Felipe Chernicharo',
	email: 'testeteste@gmail.com',
	avatarUrl: '../public/adaptive-icon.png',
};

export const UserContext = createContext<IUserContext>({
	user: null,
});

export function UserContextProvider({
	app,
	children,
}: IUserContextProviderProps) {
	const [user, setUser] = useState<IAppUser>(dummyUser);

	const context: IUserContext = {
		user,
	};

	return (
		<UserContext.Provider value={context}>{children}</UserContext.Provider>
	);
}

// const db = getFirestore(app);

// async function getUsers(db: Firestore) {
// 	const usersCollection = collection(db, 'users');
// 	const usersSnapshot = await getDocs(usersCollection);
// 	const usersList = usersSnapshot.docs.map(doc => doc.data());
// 	console.log(usersList);
// }

// getUsers(db);

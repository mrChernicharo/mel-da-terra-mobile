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

export function UserContextProvider({ app, children }: IUserContextProviderProps) {
  const [user, setUser] = useState<IAppUser | null>(null);
  const db = getFirestore();
  const userStorage = useAsyncStorage('user');

  async function handleSignIn(email: string, password: string) {
    try {
      const userCredentials = await signInWithEmailAndPassword(getAuth(), email, password);

      if (userCredentials) {
        const user = await getFirestoreUser(db, email);
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
      const userCredentials = await createUserWithEmailAndPassword(getAuth(), email, password);

      if (userCredentials) {
        const newUser: IAppUser = {
          id: '',
          email,
          name: username || '',
          avatarUrl: userCredentials.user.photoURL || '',
          phone: userCredentials.user.phoneNumber || '',
        };

        await saveUser(db, newUser as IAppUser);
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

// async function getFirestoreUsers(db: Firestore) {
// 	const usersCollection = collection(db, 'users');
// 	const usersSnapshot = await getDocs(usersCollection);
// 	const usersList = usersSnapshot.docs.map(doc => doc.data());
// 	console.log(usersList);
// }

async function getFirestoreUser(db: Firestore, email: string) {
  try {
    const q = query(collection(db, 'users'), where('email', '==', email));

    const usersSnapshot = await getDocs(q);

    const user = usersSnapshot.docs.map(doc => doc.data())[0];

    return user as IAppUser;
  } catch (err) {
    throw new Error('usuário não encontrado no banco de dados');
  }
}

async function saveUser(db: Firestore, user: IAppUser) {
  try {
    const addedUserDoc = await addDoc(collection(db, 'users'), {});

    const updatedUser = { ...user, id: addedUserDoc.id };
    await updateDoc(addedUserDoc, updatedUser);

    console.log('created user: ', JSON.stringify(updatedUser));
  } catch (err) {
    throw new Error('Erro ao gurardar usuário no Banco de dados');
  }
}

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInAnonymously,
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
    deleteDoc,
    where,
    query,
} from 'firebase/firestore/lite';
import { IAppUser } from '../utils/interfaces';
import { FirebaseApp, initializeApp } from 'firebase/app';

const { FIREBASE_API_KEY } = process.env;
const { FIREBASE_AUTH_DOMAIN } = process.env;
const { FIREBASE_PROJECT_ID } = process.env;
const { FIREBASE_STORAGE_BUCKET } = process.env;
const { FIREBASE_MESSAGING_SENDER_ID } = process.env;
const { FIREBASE_APP_ID } = process.env;
const { FIREBASE_MEASUREMENT_ID } = process.env;

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export async function firestoreGetUsers() {
    const usersCollection = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCollection);
    const usersList = usersSnapshot.docs.map(doc => doc.data());
    return usersList;
}

export async function firestoreGetUser(email: string) {
    try {
        const q = query(collection(db, 'users'), where('email', '==', email));

        const usersSnapshot = await getDocs(q);

        const user = usersSnapshot.docs.map(doc => doc.data())[0];

        return user as IAppUser;
    } catch (err) {
        throw new Error('usuário não encontrado no banco de dados');
    }
}

export async function firebaseSaveUser(user: IAppUser) {
    try {
        const addedUserDoc = await addDoc(collection(db, 'users'), {});

        const updatedUser = { ...user, id: addedUserDoc.id };
        await updateDoc(addedUserDoc, updatedUser);

        // console.log('created user: ', JSON.stringify(updatedUser));
    } catch (err) {
        throw new Error('Erro ao gurardar usuário no Banco de dados');
    }
}

export async function firebaseEmailAndPasswordSignIn(email: string, password: string) {
    try {
        const credentials = signInWithEmailAndPassword(auth, email, password);
        return credentials;
    } catch (err) {
        throw new Error('Erro do firebase na autenticação');
    }
}

export async function firebaseEmailPasswordCreateUser(email: string, password: string) {
    try {
        const credentials = createUserWithEmailAndPassword(auth, email, password);
        return credentials;
    } catch (err) {
        throw new Error('Erro do firebase na criação do usuário');
    }
}

export async function firebaseCreateAnonimousUser() {
    const cred = await signInAnonymously(auth);
    return cred;
}

export async function firebaseSignOut() {
    await signOut(auth);
}

export async function _firebaseDeleteAccount(email: string) {
    const q = query(collection(db, 'users'), where('email', '==', email));

    const querySnap = getDocs(q);
    const docs = (await querySnap).docs;

    docs.forEach(doc => {
        deleteDoc(doc.ref);
    });

    await auth.currentUser?.delete();
}

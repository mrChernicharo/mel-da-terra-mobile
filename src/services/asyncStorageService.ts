import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { IAppUser } from '../utils/interfaces';

export async function retrieveUser() {
    const userStorage = useAsyncStorage('user');

    try {
        const data = await userStorage.getItem();

        if (!data) return;

        const userData = JSON.parse(data as string) as IAppUser;
        // console.log('async storage retrieve: ', userData);

        return userData;
    } catch (err) {
        console.log(err);
    }
}

export async function storeUser(user: IAppUser) {
    const userStorage = useAsyncStorage('user');

    const strUser = JSON.stringify(user);
    await userStorage.setItem(strUser, err => console.log('ERROR: ' + err));

    const savedUser = await userStorage.getItem();
    console.log('user added to localstorage :', savedUser);
}

export async function clearStorage() {
    const userStorage = useAsyncStorage('user');

    await userStorage.removeItem();
}

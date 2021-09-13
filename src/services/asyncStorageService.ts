import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { IAppUser } from '../utils/interfaces';

const userStorage = useAsyncStorage('user');

export async function asyncStorageRetrieveUser() {
    const userInfo = await userStorage.getItem();

    const userData = JSON.parse(userInfo as string);

    return userData as IAppUser;
}

export async function asyncStorageAddUser(user: IAppUser) {
    const strUser = JSON.stringify(user);
    await userStorage.setItem(strUser, err => {
        if (err) console.log('ERROR: ' + err);
    });

    const savedUser = await userStorage.getItem();
    console.log('user added to localstorage :', savedUser);
}

export async function clearAsyncStorage() {
    await userStorage.removeItem();
}

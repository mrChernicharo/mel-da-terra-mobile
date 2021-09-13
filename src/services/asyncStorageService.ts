import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { IAppTheme } from '../store/ThemeContext';
import { IAppUser } from '../utils/interfaces';

const userStorage = useAsyncStorage('user');
const themeStorage = useAsyncStorage('favoriteTheme');

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

export async function asyncStorageClearUser() {
    await userStorage.removeItem();
}

export async function asyncStorageSetFavoriteTheme(favoriteTheme: IAppTheme) {
    await themeStorage.setItem(favoriteTheme, err => {
        if (err) console.log('ERROR: ' + err);
    });

    const savedTheme = await themeStorage.getItem();
    console.log('favorite theme saved into localstorage :', savedTheme);
}

export async function asyncStorageGetFavoriteTheme() {
    try {
        const favorite = await themeStorage.getItem();

        return favorite as IAppTheme;
    } catch (err) {
        throw new Error('tema não encontrado');
    }
}

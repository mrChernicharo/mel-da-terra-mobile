import { renderHook, act } from '@testing-library/react-hooks';
import { startAsync } from 'expo-auth-session';
import { _firebaseDeleteAccount } from '../services/firebaseService';
import { IGoogleAuthResponse, IGoogleUserInfo } from '../services/googleService';

import { AuthContextProvider, useAuthContext } from './AuthContext';

// overwriting external lib behaviors
jest.mock('expo-auth-session', () => {
    return {
        googleSignIn: () => ({
            type: 'success',
            user: {
                email: 'string7dev@gmail',
                family_name: 'Felipe',
                given_name: 'Chernicharo',
                name: 'Felipe Chernicharo',
                picture: 'any_picture.jpg',
            } as IGoogleUserInfo,
        }),
    };
});

describe('AuthContext', () => {
    it('should be able to signin with password and email', async () => {
        const { result } = renderHook(() => useAuthContext(), {
            wrapper: AuthContextProvider,
        });

        expect(result.current.user).toBeNull();

        await act(() => result.current.signIn('mari@weiss.com', '12341234'));

        expect(result.current.user).toBeTruthy();
    });

    it('should be able to login and logout', async () => {
        const { result } = renderHook(() => useAuthContext(), {
            wrapper: AuthContextProvider,
        });

        expect(result.current.user).toBeNull();

        await act(() => result.current.signIn('mari@weiss.com', '12341234'));

        expect(result.current.user).toBeTruthy();
        expect(result.current.user).toHaveProperty('id');
        expect(result.current.user).toHaveProperty('name');
        expect(result.current.user).toHaveProperty('email');

        await act(() => result.current.logOut());

        expect(result.current.user).toBeNull();
    });

    it('should be able to create a new account with password and email', async () => {
        const { result } = renderHook(() => useAuthContext(), {
            wrapper: AuthContextProvider,
        });

        expect(result.current.user).toBeNull();

        await act(() => result.current.signUp('Teste Teste', 'teste@teste.com', '12341234'));

        // expect(result.current.user).toBeTruthy();
        expect(result.current.user).toHaveProperty('id');
        expect(result.current.user).toHaveProperty('name', 'Teste Teste');
        expect(result.current.user).toHaveProperty('email');

        await act(() => result.current.logOut());

        expect(result.current.user).toBeNull();
    });

    it('should be able to delete the created user from auth and firestore', async () => {
        const { result } = renderHook(() => useAuthContext(), {
            wrapper: AuthContextProvider,
        });
        expect(result.current.user).toBeNull();

        await act(() => result.current.signIn('teste@teste.com', '12341234'));

        // expect(result.current.user).toBeTruthy();
        expect(result.current.user).toHaveProperty('id');
        expect(result.current.user).toHaveProperty('name');
        expect(result.current.user).toHaveProperty('email', 'teste@teste.com');

        await act(() => result.current.logOut());
        await _firebaseDeleteAccount('teste@teste.com');

        expect(result.current.user).toBeNull();
    });

    // it('should be able to signin with google', async () => {
    //     const { result } = renderHook(() => useAuthContext(), {
    //         wrapper: AuthContextProvider,
    //     });

    //     await act(() => result.current.googleSignIn());

    //     expect(result.current.user?.email).toEqual('string7dev@gmail');
    // });
});

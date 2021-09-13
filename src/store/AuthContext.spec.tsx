import { renderHook, act, WaitFor } from '@testing-library/react-hooks';
import { mocked } from 'ts-jest/utils';
import fetchMock from 'jest-fetch-mock';

import { startAsync } from 'expo-auth-session';

import { _firebaseDeleteAccount } from '../services/firebaseService';
import { AuthContextProvider, useAuthContext } from './AuthContext';

// mock lib behavior. Works together with { mocked }
jest.mock('expo-auth-session');

fetchMock.enableMocks();

describe('AuthContext', () => {
    it('should be able to signin with password and email', async () => {
        const { result } = renderHook(() => useAuthContext(), {
            wrapper: AuthContextProvider,
        });

        expect(result.current.user).toBeNull();

        await act(() => result.current.signIn('mari@weiss.com', '12341234'));

        expect(result.current.user).toBeTruthy();
    });

    it('should be able to login and to logout', async () => {
        const { result } = renderHook(() => useAuthContext(), {
            wrapper: AuthContextProvider,
        });

        expect(result.current.user).toBeNull();

        await act(() => result.current.signIn('mari@weiss.com', '12341234'));

        expect(result.current.user).toBeTruthy();
        expect(result.current.user).toHaveProperty('id');
        expect(result.current.user).toHaveProperty('name');
        expect(result.current.user).toHaveProperty('email', 'mari@weiss.com');

        await act(() => result.current.logOut());

        expect(result.current.user).toBeNull();
    });

    it('should throw error when login attempt is made with invalid password/email', async () => {
        const { result } = renderHook(() => useAuthContext(), {
            wrapper: AuthContextProvider,
        });

        expect(result.current.user).toBeNull();

        try {
            await act(() => result.current.signIn('invalid@email.com', 'invalid_pass'));
        } catch (err) {
            expect(
                '[Error: Não foi possível logar. Verifique a combinação email/senha e tente novamente. ERRO: FirebaseError: Firebase: Error (auth/user-not-found).]'
            ).toContain(err);
        }
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

        await _firebaseDeleteAccount('teste@teste.com');
        await act(() => result.current.logOut());

        expect(result.current.user).toBeNull();
    });

    it('should be able to signin with google', async () => {
        const { TEST_GOOGLE_ACCESS_TOKEN } = process.env;

        const googleMock = mocked(startAsync as any);

        googleMock.mockReturnValueOnce({
            type: 'success',
            params: {
                access_token: TEST_GOOGLE_ACCESS_TOKEN,
            },
        });

        fetchMock.mockResponseOnce(
            JSON.stringify({
                id: 'any_id',
                email: 'string7dev@gmail.com',
                name: 'Felipe Chernicharo',
                photo: 'any_photo.png',
            })
        );

        const { result } = renderHook(() => useAuthContext(), {
            wrapper: AuthContextProvider,
        });

        await act(() => result.current.googleSignIn());

        expect(result.current.user?.email).toEqual('string7dev@gmail.com');
        expect(result.current.user?.name).toEqual('Felipe Chernicharo');
    });

    it('should not connect with google when login process is canceled', async () => {
        const googleMock = mocked(startAsync as any);

        googleMock.mockReturnValueOnce({
            type: 'cancel',
        });

        const { result } = renderHook(() => useAuthContext(), {
            wrapper: AuthContextProvider,
        });

        await act(() => result.current.googleSignIn());

        console.log(result.current.user);

        expect(result.current.user).toBeNull();
    });
});

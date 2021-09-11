import * as AuthSession from 'expo-auth-session';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

interface IGoogleAuthResponse {
    params: { access_token: string };
    type: string;
}

interface IGoogleUserInfo {
    email: string;
    family_name: string;
    given_name: string;
    name: string;
    picture: string;
}

const { GOOGLE_CLIENT_ID } = process.env;
const { GOOGLE_REDIRECT_URI } = process.env;

export async function googleSignIn() {
    try {
        const CLIENT_ID = GOOGLE_CLIENT_ID;
        const REDIRECT_URI = GOOGLE_REDIRECT_URI;
        const RESPONSE_TYPE = 'token';
        const SCOPE = encodeURI('profile email');
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

        const OAuthResponse = await AuthSession.startAsync({ authUrl });

        const { params, type } = OAuthResponse as IGoogleAuthResponse;
        const { access_token } = params;

        if (type === 'success') {
            const response = await fetch(
                `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`
            );
            const userInfo = await response.json();

            const provider = new GoogleAuthProvider();
            console.log(provider);

            return userInfo as IGoogleUserInfo;
        }
    } catch (err) {
        throw new Error(`erro no google signin. ERRO: ${err}`);
    }
}

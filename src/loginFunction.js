import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { oAuthentication } from './firebase-config';

export async function fnLogin(sEmail, sPassword) {
    try {
        await signInWithEmailAndPassword(
            oAuthentication, 
            sEmail, 
            sPassword
        );
    } catch (error) {
        console.error(error);
        return error;
    }
}

export async function fnLogout() {
    try {
        await signOut(oAuthentication);
    } catch (error) {
        console.error(error);
        return error;
    }
};
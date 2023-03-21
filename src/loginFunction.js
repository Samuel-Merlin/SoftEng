import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from './firebase-config';

export async function fnLogin(sEmail, sPassword) {
    try {
        await signInWithEmailAndPassword(
            auth, 
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
        await signOut(auth);
    } catch (error) {
        console.error(error);
        return error;
    }
};
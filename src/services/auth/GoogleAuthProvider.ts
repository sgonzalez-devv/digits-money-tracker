// Import Firebase Auth and GoogleAuthProvider
import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Function to handle Google Sign-In
export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        // Access user information
        const user = result.user;
        console.log('User signed in:', user);

        // Additional user info (optional)
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log('Access Token:', token);

        return user;
    } catch (error: any) {
        console.error('Error during sign-in:', error.message);
        throw error;
    }
}

"use client";

import React from 'react';
import { signInWithGoogle } from '@/services/auth/GoogleAuthProvider';

export default function LoginPage() {
    const handleGoogleLogin = async () => {
        try {
            const user = await signInWithGoogle();
            window.location.href = '/dashboard';
            sessionStorage.setItem("user credentials", JSON.stringify(user));
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Sign In</h1>
            <button
                onClick={handleGoogleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Sign in with Google
            </button>
        </div>
    );
}

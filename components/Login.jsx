import React from 'react';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/pages/firebase';
import Button from './Button';

const Login = () => {
    const router = useRouter();
    const googleAuth = new GoogleAuthProvider();
    const login = async () => {
        const result = await signInWithPopup(auth, googleAuth);
        router.push('/home');
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col bg-slate-800 rounded-xl w-1/3 h-1/2 items-center p-20'>
                <h1 className='font-bold uppercase text-3xl text-white'>Login</h1>
                <div className='my-12 w-full'>
                    <Button
                        handleClick={login}
                        text="Login with Google"
                        className='w-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default Login
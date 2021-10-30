import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { User } from './register';

const Login: NextPage = () => {
	const router = useRouter();
	const [email, setEmail] = useState('');

	return (
		<Layout>
			<Head>
				<title>Login - HireLanes</title>
			</Head>
			<main className='w-1/2 mx-auto l1'>
				<h1 className='text-4xl text-primary-800 font-bold pb-2 text-center'>Log In</h1>
				<p className='text-center'>
					New?{' '}
					<Link to='/register' style='link' className='font-bold text-primary-800 underline'>
						Register here.
					</Link>
				</p>

				<form
					className='w-2/3 mx-auto flex justify-evenly flex-wrap pt-12'
					onSubmit={e => {
						e.preventDefault();
						if (typeof window !== undefined) {
							const accounts: Array<User> = JSON.parse(window.localStorage.getItem('accounts') || '[]');
							const acc = accounts.find(a => a.email === email);
							if (!acc) router.push('/register');
							window.localStorage.setItem('session', JSON.stringify(acc));
							if (acc?.type === 'candidate') router.push('/candidate');
							else router.push('/employer');
						}
					}}
				>
					<div className='w-full flex justify-between items-center py-3'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							className='input'
							required
							onBlur={e => setEmail(e.target.value)}
						/>
					</div>
					<div className='w-full flex justify-between items-center py-3'>
						<label htmlFor='password'>Password</label>
						<input type='password' name='password' id='password' className='input' required />
					</div>

					<Button type='primary' className='mt-10' props={{ type: 'submit' }}>
						Submit
					</Button>
				</form>
			</main>
		</Layout>
	);
};

export default Login;

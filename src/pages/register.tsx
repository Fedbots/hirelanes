import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Link from '../components/Link';

type UserType = 'candidate' | 'employer';

export interface User {
	name: string;
	email: string;
	type: UserType;
}

const Register: NextPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [type, setType] = useState<UserType>('candidate');
	const router = useRouter();

	return (
		<Layout>
			<main className='w-1/2 mx-auto l1'>
				<h1 className='text-4xl text-primary-800 font-bold pb-2 text-center'>Sign Up</h1>
				<p className='text-center'>
					Already registered?{' '}
					<Link to='/login' style='link' className='font-bold text-primary-800 underline'>
						Login here.
					</Link>
				</p>

				<form
					className='w-2/3 mx-auto flex justify-evenly flex-wrap pt-12'
					onSubmit={e => {
						e.preventDefault();
						if (typeof window !== undefined) {
							const accounts: Array<User> = JSON.parse(window.localStorage.getItem('accounts') || '[]');
							if (accounts.find(a => a.email === email)) router.push('/login');
							accounts.push({ name, email, type });
							window.localStorage.setItem('accounts', JSON.stringify(accounts));
							router.push('/login');
						}
					}}
				>
					<div className='w-full flex justify-between items-center py-3'>
						<label htmlFor='name'>Name</label>
						<input type='text' id='name' className='input' required onBlur={e => setName(e.target.value)} />
					</div>
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
						<label htmlFor='password'>New Password</label>
						<input type='password' name='password' id='password' className='input' required />
					</div>
					<div className='w-full flex justify-between items-center py-3'>
						<label htmlFor='confirm-password'>Confirm Password</label>
						<input
							type='password'
							name='confirm-password'
							id='confirm-password'
							className='input'
							required
						/>
					</div>
					<div className='w-full flex justify-between items-center py-3'>
						<label htmlFor='user-type'>Select user type:</label>
						<select name='user-type' id='user-type' className='input py-2 px-3 bg-white' required>
							<option value='candidate' onClick={() => setType('candidate')}>
								Candidate
							</option>
							<option value='employer' onClick={() => setType('employer')}>
								Employer
							</option>
						</select>
					</div>

					<Button type='primary' className='mt-16' props={{ type: 'submit' }}>
						Submit
					</Button>
				</form>
			</main>
		</Layout>
	);
};

export default Register;

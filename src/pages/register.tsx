import type { NextPage } from 'next';
import React from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Link from '../components/Link';

const Register: NextPage = () => {
	return (
		<Layout>
			<main className='w-1/2 mx-auto rounded-3xl shadow-md p-9'>
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
						console.log('Form Submitted!');
					}}
				>
					<div className='w-full flex justify-between items-center py-3'>
						<label htmlFor='name'>Name</label>
						<input type='text' id='name' className='input' required />
					</div>
					<div className='w-full flex justify-between items-center py-3'>
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' className='input' required />
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
							<option value='candidate'>Candidate</option>
							<option value='employer'>Employer</option>
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

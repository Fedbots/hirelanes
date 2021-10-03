import type { NextPage } from 'next';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Link from '../components/Link';

const Login: NextPage = () => {
	return (
		<Layout>
			<main className='w-1/2 mx-auto rounded-3xl shadow-md p-9'>
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
						console.log('Form Submitted!');
					}}
				>
					<div className='w-full flex justify-between items-center py-3'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							className='w-1/2 border-4 py-1.5 px-3 rounded-lg shadow focus:border-primary-400 focus:outline-none focus:shadow-2xl'
							required
						/>
					</div>
					<div className='w-full flex justify-between items-center py-3'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							id='password'
							className='w-1/2 border-4 py-1.5 px-3 rounded-lg shadow focus:border-primary-400 focus:outline-none focus:shadow-2xl'
							required
						/>
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

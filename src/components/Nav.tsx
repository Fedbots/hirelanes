import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import logo from '../../public/hirelanes.svg';
import Link from './Link';

interface Props {
	session?: string;
}

const Nav = ({ session }: Props) => {
	const router = useRouter();
	const home = session ? `/${session}` : '/';
	return (
		<nav
			className='flex sticky top-0 left-0 px-4 py-2 mb-6 justify-between items-center font-serif'
			role='navigation'
		>
			<Link to={home} style='link'>
				<div className='flex w-40 h-14'>
					<Image src={logo} alt='Hirelanes logo' />
				</div>
			</Link>
			{!session && (
				<div className='flex justify-evenly w-1/5 h-full'>
					<Link style='button-secondary' to='/login'>
						Log In
					</Link>
					<Link style='button-primary' to='/register'>
						Sign Up
					</Link>
				</div>
			)}
			{session && (
				<div className='flex justify-end w-1/5 h-full'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='56'
						height='56'
						viewBox='0 0 24 24'
						style={{ fill: 'rgba(0, 0, 0, 1)', cursor: 'pointer' }}
						onClick={() => {
							if (typeof window !== undefined) {
								window.localStorage.removeItem('session');
								router.push('/login');
							}
						}}
					>
						<path d='M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z'></path>
					</svg>
				</div>
			)}
		</nav>
	);
};

export default Nav;

import React from 'react';
import Link from './Link';

const Nav = () => {
	return (
		<nav className='flex sticky top-0 left-0 px-4 py-2 mb-6 justify-between items-center font-serif'>
			<Link to='/' style='link'>
				<div className='flex w-40 h-14 bg-black'>Logo</div>
			</Link>
			<div className='flex justify-evenly w-1/5 h-full'>
				<Link style='button-secondary' to='/login'>
					Log In
				</Link>
				<Link style='button-primary' to='/register'>
					Sign Up
				</Link>
			</div>
		</nav>
	);
};

export default Nav;

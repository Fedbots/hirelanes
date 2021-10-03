import React, { Fragment, ReactNode } from 'react';
import Nav from './Nav';

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => (
	<Fragment>
		<Nav />
		<main className='font-serif container'>{children}</main>
	</Fragment>
);

export default Layout;

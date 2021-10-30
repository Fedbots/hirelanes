import React, { Fragment, ReactNode } from 'react';
import Nav from './Nav';

interface Props {
	children: ReactNode;
	session?: string;
}

const Layout = ({ children, session }: Props) => (
	<Fragment>
		<Nav session={session} />
		<main className='font-serif container'>{children}</main>
	</Fragment>
);

export default Layout;

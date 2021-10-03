import React, { ReactNode } from 'react';
import Link from 'next/link';
import { primaryStyle, secondaryStyle } from './Button';

interface Props {
	style: 'button-primary' | 'button-secondary' | 'link';
	to: string;
	className?: string;
	children: ReactNode;
}

const LinkComponent = ({ style, to, className = '', children }: Props) => {
	if (style === 'button-primary') {
		return (
			<Link href={to}>
				<a className={`${primaryStyle} ${className}`}>{children}</a>
			</Link>
		);
	}
	if (style === 'button-secondary') {
		return (
			<Link href={to}>
				<a className={`${secondaryStyle} ${className}`}>{children}</a>
			</Link>
		);
	}
	return (
		<Link href={to}>
			<a className={className}>{children}</a>
		</Link>
	);
};

export default LinkComponent;

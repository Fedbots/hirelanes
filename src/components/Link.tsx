import React, { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
	style: 'button-primary' | 'button-secondary' | 'link';
	to: string;
	className?: string;
	children: ReactNode;
}

const LinkComponent = ({ style, to, className = '', children }: Props) => {
	if (style === 'button-primary' || style === 'button-secondary') {
		return (
			<Link href={to}>
				<a className={`${style === 'button-primary' ? 'btn-primary' : 'btn-secondary'} ${className}`}>
					{children}
				</a>
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

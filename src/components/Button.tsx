import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

const base = 'px-8 py-3 shadow rounded-lg font-medium';
export const primaryStyle = `${base} bg-primary-500 hover:bg-primary-600 text-white`;
export const secondaryStyle = `${base} bg-white hover:bg-primary-600 hover:text-white`;

interface Props {
	children: ReactNode;
	className?: string;
	props?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
	type: 'primary' | 'secondary';
}

const Button = ({ children, className = '', type, props = {} }: Props) => {
	return (
		<button className={`${type === 'primary' ? primaryStyle : secondaryStyle} ${className}`} {...props}>
			{children}
		</button>
	);
};

export default Button;

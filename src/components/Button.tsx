import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface Props {
	children: ReactNode;
	className?: string;
	props?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
	type: 'primary' | 'secondary';
}

const Button = ({ children, className = '', type, props = {} }: Props) => {
	return (
		<button className={`${type === 'primary' ? 'btn-primary' : 'btn-secondary'} ${className}`} {...props}>
			{children}
		</button>
	);
};

export default Button;

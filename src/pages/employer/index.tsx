import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import db from '../../util/db.json';

const EDB: NextPage = () => {
	const [count, setCount] = useState(0);
	const router = useRouter();

	useEffect(() => {
		if (typeof window !== undefined) {
			const acc = JSON.parse(window.localStorage.getItem('session') || 'null');
			if (!acc) router.push('/login');
			if (acc.type === 'candidate') router.push('/candidate');
			const count = JSON.parse(window.localStorage.getItem('count') || '0');
			setCount(count);
		}
	}, [router]);

	return (
		<Layout session='employer'>
			<Head>
				<title>Employer Dashboard - HireLanes</title>
			</Head>
			<main className='w-3/4 mx-auto flex justify-between p-9'>
				<aside className='w-1/3 text-center l1'>
					<p className='text-2xl'>Applicants</p>
					<p className='font-bold text-primary-800 mt-6 text-7xl'>{count}</p>
				</aside>
				<aside className='w-1/3 text-center l1'>
					<p className='text-2xl'>Positions</p>
					<p className='font-bold text-primary-800 mt-6 text-7xl'>{Math.floor(Math.random() * 10)}</p>
				</aside>
			</main>

			<article className='w-1/2 mx-auto l1'>
				<h1 className='text-2xl text-center'>Suggested Candidates for you:</h1>
				{db.map(d => (
					<div
						key={d.name}
						className='shadow-lg p-4 flex rounded-xl my-8 cursor-pointer'
						onClick={() => {
							if (typeof window !== undefined) {
								window.localStorage.setItem('company', d.name);
								return router.push('/employer/job');
							}
						}}
					>
						<div className='w-1/2 flex flex-col justify-center'>
							<h2 className='text-2xl'>{d.name}</h2>
							<p className='text-base text-gray-600 italic'>{d.role}</p>
						</div>
						<div className='w-1/3 text-2xl flex items-center justify-end'>{d.sal}</div>
					</div>
				))}
			</article>
		</Layout>
	);
};

export default EDB;

/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import jobs from '../../util/jobs.json';

const CDB: NextPage = () => {
	const [name, setName] = useState('');
	const [count, setCount] = useState(0);
	const router = useRouter();

	useEffect(() => {
		if (typeof window !== undefined) {
			const acc = JSON.parse(window.localStorage.getItem('session') || 'null');
			if (acc) setName(acc.name);
			else router.push('/login');
			if (acc.type === 'employer') router.push('/employer');
			const count = JSON.parse(window.localStorage.getItem('count') || '0');
			setCount(count);
		}
	}, [router]);

	return (
		<Layout session='candidate'>
			<Head>
				<title>Candidate Dashboard - HireLanes</title>
			</Head>
			<h1 className='text-5xl'>
				Hello <span className='font-bold text-primary-800'>{name}</span>!
			</h1>
			<main className='w-3/4 mx-auto flex justify-between p-9'>
				<aside className='w-1/3 text-center l1'>
					<p className='text-2xl'>Active Applications</p>
					<p className='font-bold text-primary-800 mt-6 text-7xl'>{count}</p>
				</aside>
				<aside className='w-1/3 text-center l1'>
					<p className='text-2xl'>Database Views</p>
					<p className='font-bold text-primary-800 mt-6 text-7xl'>0</p>
				</aside>
			</main>
			<article className='w-1/2 mx-auto l1 mb-12'>
				<h1 className='text-2xl text-center'>Suggested Jobs for you:</h1>
				{jobs.map(j => (
					<div
						key={j.id}
						className='shadow-lg p-4 flex rounded-xl my-8 cursor-pointer'
						onClick={() => {
							if (typeof window !== undefined) {
								window.localStorage.setItem('company', j.id);
								return router.push('/candidate/job');
							}
						}}
					>
						<div className='w-1/6 flex justify-center'>
							<img src={j.logo} alt='Company Logo' className='h-24 w-24 rounded-full' />
						</div>
						<div className='w-1/2 flex flex-col justify-center'>
							<h2 className='text-2xl'>{j.company}</h2>
							<p className='text-base text-gray-600 italic'>{j.position}</p>
						</div>
						<div className='w-1/3 text-2xl flex items-center justify-end'>{j.salary}</div>
					</div>
				))}
			</article>
		</Layout>
	);
};

export default CDB;

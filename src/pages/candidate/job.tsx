/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import jobs from '../../util/jobs.json';

const JobPreview: NextPage = () => {
	const [name, setName] = useState('');
	const [pos, setPos] = useState('');
	const [sal, setSal] = useState('');
	const [logo, setLogo] = useState('');

	const router = useRouter();

	useEffect(() => {
		if (typeof window !== undefined) {
			const acc = JSON.parse(window.localStorage.getItem('session') || 'null');
			if (!acc) router.push('/login');
			const id = window.localStorage.getItem('company');
			const job = jobs.find(j => j.id === id);
			if (job) {
				setName(job.company);
				setPos(job.position);
				setSal(job.salary);
				setLogo(job.logo);
			} else router.push('/candidate');
		}
	}, [router]);

	return (
		<Layout session='candidate'>
			<Head>
				<title>Job Details - HireLanes</title>
			</Head>
			<main className='w-3/4 mx-auto flex flex-wrap items-center l1 mb-10'>
				<aside className='w-1/6 flex justify-center'>
					<img src={logo} alt='Company Logo' className='h-32 w-32 rounded-full' />
				</aside>
				<aside className='w-1/2'>
					<h1 className='text-3xl font-bold text-primary-800'>{name}</h1>
					<p className='text-gray-600 text-xl italic'>{pos}</p>
				</aside>
				<aside className='w-1/3 text-right'>
					<h1 className='text-lg italic text-gray-600'>Average salary:</h1>
					<p className='text-2xl font-bold'>{sal}</p>
				</aside>

				<article className='w-3/4 mx-auto mt-12'>
					<h2 className='font-bold text-primary-800 text-xl'>About the role:</h2>
					<p className='mt-5 px-4'>
						• Manage &amp; perform the design, configuration &amp; testing of SAP, Successfactors, SFDC
						&amp; other on-prem and cloud applications for projects, upgrades, implementations and roll
						outs. <br />
						• Manage support according to Global SLA, respond to emergencies (24X7). <br />• Maintain
						standards of system performance &amp; reliability by following procedures, analyzing root causes
						&amp; continuous improvement. <br />• Adhere to global governance, project steps &amp;
						documentation. <br />• Ability to independently connect with business to understand the
						requirement and recommend a suitable solution. <br />• Ability to design functional
						specifications for developers for specific custom developments. <br /> • Conduct systems tests
						for security, performance, and availability. <br /> • Stay updated with the latest technological
						advancement and changes in the world of SAP development and other technologies. Adapt to these
						changes by self-training and research work. <br /> • Bring the innovation and external
						experience in processes such as ERP applications, cloud applications etc.
					</p>
					<h2 className='font-bold text-primary-800 text-xl mt-9'>About the company:</h2>
					<p className='mt-5 px-4'>
						Do you want to come to work with a smile and leave with one as well? In between those smiles,
						your day consists of working in a global organization, continually learning and collaborating,
						having stimulating discussions, and making impactful contributions! If this is how you see your
						career, {name} is the place to be! Our dependable household brands, dedicated employees, and
						sustainability commitments make us a company passionate about building a future to smile about
						for our employees, consumers, and surrounding communities. The pride in our brand fuels a
						workplace that encourages creative thinking, champions experimentation, and promotes
						authenticity which has contributed to our enduring success. If you want to work for a company
						that lives by their values, then give your career a reason to smile...every single day. The
						Experience In today’s dynamic technology environment it is an exciting time to be a part of the
						information technology team at {name}. Our highly technical and innovative team is dedicated to
						driving growth for {name} in this ever-changing landscape. What role will you play as a member
						of the {name} Information Technology team? The candidate is responsible for business facing
						support &amp; development for various applications in the HR area. The role requires the person
						to support the global business processes within the function, Participate in execution of
						different projects activities and ensure the smooth execution of critical business processes.
						The person will be required to collaborate with business teams / technical teams and IT
						counterparts for daily support incidents and project activities in different business areas
						across all geographies. Ability to understand the requirements related to business problems and
						transform that into a solution design.
					</p>

					<div className='text-center mt-6'>
						<Button
							type='primary'
							props={{
								onClick: () => {
									toast.success('Successfully applied to this job!', {
										position: 'top-center',
										autoClose: 5000,
										hideProgressBar: false,
										closeOnClick: true,
										pauseOnHover: true,
										draggable: true
									});
									if (typeof window !== undefined) {
										const count = JSON.parse(window.localStorage.getItem('count') || '0');
										window.localStorage.setItem('count', JSON.stringify(count + 1));
									}
								}
							}}
						>
							Apply
						</Button>
					</div>
				</article>
			</main>
			<ToastContainer />
		</Layout>
	);
};

export default JobPreview;

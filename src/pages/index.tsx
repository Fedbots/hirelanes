import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Link from '../components/Link';
import deal from '../img/deal.svg';
import { dealURI } from '../util/misc';

const Home: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>HireLanes</title>
			</Head>
			<div className='flex' style={{ height: '85vh' }}>
				<div className='w-1/3 px-12 flex flex-col justify-between'>
					<section>
						<h1 className='text-4xl text-primary-800 font-bold pb-2'>
							Job Search Made Easy, for Candidates.
						</h1>
						<p>
							Easily apply for a job from wide range of available job postings. Or, you can add your
							details to our candidate database and wait for a recruiter to contact you. It’s your choice!
						</p>
					</section>

					<section>
						<h1 className='text-4xl text-primary-800 font-bold pb-2'>Hiring Made Easy, for Employers.</h1>
						<span>
							Enlist your company to our website, set a job posting template, and you’re all set. We will
							automatically post a new job ad every week and candidates will contact you for the job. Or,
							you can access our candidate database and screen them manually. It’s your choice!
						</span>
					</section>

					<section className='flex flex-col justify-between items-stretch h-40'>
						<Link style='button-secondary' to='/login' className='flex py-5 justify-center'>
							Log In
						</Link>

						<Link style='button-primary' to='/register' className='flex py-5 justify-center'>
							Sign Up
						</Link>
					</section>
				</div>
				<div className='w-2/3'>
					<Image
						src={deal}
						alt='Two people shaking hands, indicating a successful business deal.'
						layout='responsive'
						placeholder='blur'
						blurDataURL={dealURI}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default Home;

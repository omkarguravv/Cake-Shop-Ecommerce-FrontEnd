import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
	return (
		<div className='flex flex-col justify-center items-center h-screen w-full'>
			{/* <h1 className='text-8xl'>404</h1>
			<h1 className='text-2xl mb-20'>Oops! Page Not Found!</h1> */}
			<div className='w-1/2   duration-700 delay-700 animate-pulse     '>

			<img className='px-28 ' src="/images/404.png" alt="" />
			</div>
			<h2 className=' text-2xl text-dark-purple underline hover:text-dark-purple duration-700 delay-700 animate-pulse '>
				<Link to='/'>Go Back To Home Page</Link>
			</h2>
		</div>
	);
}

export default PageNotFound;
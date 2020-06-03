import React from 'react';
import image404 from '../assets/image-not-found.png';

const Page404 = ({ message }) => {
	return (
		<div>
			<img src={image404} alt='Image not found' />
			<h2>{message}</h2>
		</div>
	);
};

export default Page404;

import React from 'react';
import image404 from '../assets/image-not-found.png';

const Page404 = ({ message }) => {
	console.log(message);
	if (message === 'Something went wrong.' || message === undefined) {
		return (
			<div>
				<h2>{message ? message : 'Sorry Page Not Found!'}</h2>
			</div>
		);
	} else {
		return (
			<div>
				<img src={image404} alt='Image not found' />
				<h2>{message}</h2>
			</div>
		);
	}
};

export default Page404;

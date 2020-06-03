import React from 'react';

const Footer = () => {
	return (
		<div className='footer'>
			<p>MovieBase • {new Date().getFullYear()}</p>
			<a href='https://www.hansterhorst.com'>www.hansterhorst.com</a>
		</div>
	);
};

export default Footer;

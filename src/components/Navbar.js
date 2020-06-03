import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/HTH-logo.png';

function Navbar() {
	return (
		<nav>
			<img src={logo} alt='logo' />
			<h1>MovieBase</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/teacher'>Teacher</Link>
				</li>
				<li>
					<Link to='/student'>Student</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;

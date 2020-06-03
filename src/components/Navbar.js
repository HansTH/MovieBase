import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/HTH-logo.png';

function Navbar(props) {
	const clickedNavLink = () => {
		props.clickedNavLink();
	};
	return (
		<nav>
			<div className='container'>
				<div className='navbar'>
					<div className='nav-logo'>
						<img className='nav-image' src={logo} alt='logo' />
						<h1 className='nav-title'>MovieBase</h1>
					</div>
					<ul className='nav-list'>
						<li className='nav-item'>
							<NavLink
								activeClassName='current'
								className='nav-link'
								exact
								to='/'
								onClick={clickedNavLink}
							>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								activeClassName='current'
								className='nav-link'
								to='/teacher'
								onClick={clickedNavLink}
							>
								Teacher
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								activeClassName='current'
								className='nav-link'
								to='/student'
								onClick={clickedNavLink}
							>
								Student
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

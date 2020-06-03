import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Teacher from './Teacher';
import Navbar from './Navbar';
import Footer from './Footer';
import Student from './Student';
import Home from './Home';
const API_KEY = '68dd7cc2';
const OMDB_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

export default class App extends Component {
	state = {
		isLoading: false,
		movie: [],
	};

	fetchSearchRequest = async (title) => {
		const searchRequest = OMDB_URL + `t=${title}`;
		this.setState({ isLoading: true });
		const movieData = await fetch(searchRequest).then((res) => res.json());

		this.setState({
			movie: movieData,
			isLoading: false,
		});

		console.log(movieData);
	};

	resetPage = () => {
		this.setState({
			movie: [],
		});
	};

	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar clickedNavLink={this.resetPage} />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route
								path='/teacher'
								render={() => (
									<Teacher
										state={this.state}
										handleFetchSearchRequest={this.fetchSearchRequest}
									/>
								)}
							/>
							<Route
								path='/student'
								render={() => (
									<Student
										state={this.state}
										handleFetchSearchRequest={this.fetchSearchRequest}
									/>
								)}
							/>
						</Switch>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

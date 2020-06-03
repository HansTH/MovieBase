import React, { Component } from 'react';
import './App.css';
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

		console.log(this.state.movie);
	};

	async componentDidMount() {
		console.log('componentDidMount');
		this.fetchSearchRequest('star wars');
	}

	render() {
		return (
			<div>
				<h1>Hello React</h1>
				<h2>{this.state.isLoading ? 'Loading...' : null}</h2>
			</div>
		);
	}
}

import React from 'react';
import Movie from './Movie';
import Searchbar from './Searchbar';

const Student = ({ state, handleFetchSearchRequest }) => {
	const { Rated } = state.movie;
	const rated =
		Rated !== 'R' && Rated !== 'PG-13' ? (
			<Movie movie={state.movie} />
		) : (
			<h2>Sorry deze film is niet geschikt voor jouw!</h2>
		);

	console.log(Rated);
	return (
		<div>
			<h1>Hello Student</h1>
			<Searchbar handleFetchSearchRequest={handleFetchSearchRequest} />
			{state.movie.length !== 0 ? rated : null}
			<h2>{state.isLoading ? 'Loading...' : null}</h2>
		</div>
	);
};

export default Student;

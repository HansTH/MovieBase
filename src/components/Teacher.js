import React from 'react';
import Movie from './Movie';
import Searchbar from './Searchbar';

const Teacher = ({ state, handleFetchSearchRequest }) => {
	return (
		<div>
			<h1>Hello Teacher</h1>
			<Searchbar handleFetchSearchRequest={handleFetchSearchRequest} />
			{state.movie.length === 0 ? null : <Movie movie={state.movie} />}
			<h2>{state.isLoading ? 'Loading...' : null}</h2>
		</div>
	);
};

export default Teacher;

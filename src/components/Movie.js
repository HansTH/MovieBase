import React from 'react';

function Movie(props) {
	const { Title, Poster, Year, Plot } = props.movie;
	return (
		<div>
			<img src={Poster} alt='Movie Poster' />
			<h2>{Title}</h2>
			<h4>{Year}</h4>
			<p>{Plot}</p>
		</div>
	);
}

export default Movie;

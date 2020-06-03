import React from 'react';
import Page404 from './Page404';
import image404 from '../assets/image-not-found.png';

function Movie(props) {
	const { Title, Poster, Year, Plot, Response, Error } = props.movie;

	const poster = Poster !== 'N/A' ? Poster : image404;
	const plot = Plot !== 'N/A' ? Plot : 'Geen beschijving aanwezig';

	if (Response === 'True') {
		return (
			<div className='movie'>
				<img src={poster} alt='Movie Poster' />
				<h2>{Title}</h2>
				<h4>{Year}</h4>
				<p>{plot}</p>
			</div>
		);
	} else {
		return <Page404 message={Error} />;
	}
}

export default Movie;

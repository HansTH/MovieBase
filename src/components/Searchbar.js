import React, { Component } from 'react';

class Searchbar extends Component {
	state = {
		searchText: '',
	};

	handleOnChange = (e) => {
		this.setState({
			searchText: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleFetchSearchRequest(this.state.searchText);
		this.setState({
			searchText: '',
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					value={this.state.searchText}
					placeholder='Search on Movie title'
					onChange={this.handleOnChange}
				/>
				<button type='submit' onClick={this.handleSubmit}>
					Search
				</button>
			</form>
		);
	}
}

export default Searchbar;

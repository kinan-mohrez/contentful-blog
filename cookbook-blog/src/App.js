import React from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts';

class App extends React.Component {
	state = {
		articles: [],
	};

	componentDidMount() {
		client
			.getEntries()
			.then((response) => {
				this.setState({
					articles: response.items,
				});
			})
			.catch(console.error);
	}

	render() {
		return (
			<div className='App'>
				<h1>React with Contentful</h1>
				<Posts post={this.state.articles} />
			</div>
		);
	}
}

export default App;

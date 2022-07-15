import React, { useEffect, useState } from 'react';
import './App.css';
import { client } from './client';
import Header from './components/Header';



export default function App() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		client
			.getEntries()
			.then((response) => {
				setArticles(response.items);
			})
			.catch(console.error);
	}, []);

	return (
		<div className='App'>
			<Header articles={articles}/>

		</div>
	);
}

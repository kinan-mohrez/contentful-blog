import React, { useEffect, useState } from 'react';
import './App.css';
import { client } from './client';
import Post from './components/Post';
import Posts from './components/Posts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Traditional from './components/Traditional';
import Vegetarian from './components/Vegetarian';
import Vegan from './components/Vegan';

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

	function vegan() {
		return console.log('vegan');
	}
	function vegetarian() {
		return console.log('vegetarian');
	}
	function omnivore() {
		return console.log('traditional');
	}

	return (
		// <BrowserRouter>
		// 	<Routes>
		// 		<Route index element={<Post />} />
		// 		<Route path='traditional' element={<Traditional />} />
		// 		<Route path='vegetarian' element={<Vegetarian />} />
		// 		<Route path='vegan' element={<Vegan />} />
		// 		<Route path='*' element={<Post />} />
		// 	</Routes>
		// </BrowserRouter>
		<div className='App'>
			<h1>React with Contentful</h1>

			<button onClick={vegan}>vegan</button>
			<button onClick={vegetarian}>vegetarian</button>
			<button onClick={omnivore}> traditional</button>
			<Posts post={articles} />
		</div>
	);
}

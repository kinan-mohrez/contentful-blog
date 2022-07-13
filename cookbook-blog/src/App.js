import React, { useEffect, useState } from 'react';
import './App.css';
import { client } from './client';
import Post from './components/Post';
import Posts from './components/Posts';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
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

	return (
		<div className='App'>
			<h1>Recipes Blog</h1>
			<form className='search-form'>
				<input type='text' placeholder='Search ....' autoComplete='off' />
				<input type='submit' value='search' />
			</form>

			<BrowserRouter>
				<div>
					<NavLink to='/traditional'>traditional</NavLink>
					<br />
					<NavLink to='/vegetarian'>vegetarian</NavLink>
					<br />
					<NavLink to='/vegan'>vegan</NavLink>
					<br />
				</div>
				<Routes>
					<Route path='/' element={<Post article={articles} />} />

					<Route
						path='/traditional'
						element={<Traditional article={articles} />}
					/>

					<Route
						path='/vegetarian'
						element={<Vegetarian article={articles} />}
					/>
					<Route path='/vegan' element={<Vegan article={articles} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

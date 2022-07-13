import React, { useEffect, useState } from 'react';
import './App.css';
import { client } from './client';
import Post from './components/Post';
import Posts from './components/Posts';
import {
	BrowserRouter,
	Routes,
	Route,
	NavLink,
	Router,
} from 'react-router-dom';
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

			{/* <div className='header'>
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
						<Route
							path='/'
							element={
								articles !== [] &&
								articles.map((article, index) => (
									<Post key={index} article={article} />
								))
							}
						/>

						<Route
							path='/traditional'
							element={<Traditional article={articles} />}
						/>

						<Route
							path='/vegetarian'
							element={
								articles !== [] &&
								articles.map((article, index) => (
									<Vegetarian key={index} article={article} />
								))
							}
						/>
						<Route
							path='/vegan'
							element={
								articles !== [] &&
								articles.map((article, index) => (
									<Vegan key={index} article={article} />
								))
							}
						/>
					</Routes>
				</BrowserRouter>
			</div> */}
			<div className='recipes'>
				{articles !== [] &&
					articles.map((article, index) => (
						<Post key={index} article={article} />
					))}
			</div>
		</div>
	);

	// function vegan() {
	// 	return console.log('vegan');
	// }
	// function vegetarian() {
	// 	return console.log('vegetarian');
	// }
	// function omnivore() {
	// 	return console.log('traditional');
	// }

	// return (
	// 	<div className='header'>
	// 		<BrowserRouter>
	// 			<div>
	// 				<NavLink to='/traditional'>traditional</NavLink>
	// 				<br />
	// 				<NavLink to='/vegetarian'>vegetarian</NavLink>
	// 				<br />
	// 				<NavLink to='/vegan'>vegan</NavLink>
	// 				<br />
	// 			</div>
	// 			<Routes>
	// 				<Route path='/' element={<Post article={articles} />} />
	// 				<Route
	// 					path='/traditional'
	// 					element={<Traditional article={articles} />}
	// 				/>
	// 				<Route
	// 					path='/vegetarian'
	// 					element={<Vegetarian article={articles} />}
	// 				/>
	// 				<Route path='/vegan' element={<Vegan article={articles} />} />
	// 			</Routes>
	// 		</BrowserRouter>
	// 	</div>

	// 	// <div className='App'>
	// 	// 	<h1>React with Contentful</h1>

	// 	// 	<button onClick={vegan}>vegan</button>
	// 	// 	<button onClick={vegetarian}>vegetarian</button>
	// 	// 	<button onClick={omnivore}> traditional</button>
	// 	// 	<Posts post={articles} />
	// 	// </div>
	// );
}

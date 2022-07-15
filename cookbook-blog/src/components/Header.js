import React, { useState, useRef } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Post from './Post';
import Vegan from './Vegan';
import Vegetarian from './Vegetarian';
import Traditional from './Traditional';
import SearchItem from './SearchItem';

import { client } from './../client';

export default function Header({ articles }) {
	const [Search, setSearch] = useState('');
	const inputText = useRef();

	function onSubmit() {
		setSearch(inputText.current.value);
		client.getEntries().then(function (entries) {
			entries.items.forEach(function (entry) {
				if (entry.fields.name.match(new RegExp(`${Search}.*`, `i`))) {
					console.log(entry.fields.name);

					<SearchItem item={entry} />;
				} else {
					console.log('no recipe found');
				}
			});
		});
	}

	return (
		<div>
			<h1>Recipes Blog</h1>
			<form className='search-form'>
				<input
					type='text'
					placeholder='Search ....'
					autoComplete='off'
					ref={inputText}
				/>
				<input type='button' value='search' onClick={onSubmit} />
			</form>

			<BrowserRouter>
				<nav className='navbar'>
					<NavLink to='/' className='navlink'>
						HOME
					</NavLink>
					<NavLink to='/vegan' className='navlink'>
						VEGAN
					</NavLink>
					<NavLink to='/vegetarian' className='navlink'>
						VEGETARIAN
					</NavLink>
					<NavLink to='/traditional' className='navlink'>
						TRADITIONELL
					</NavLink>
				</nav>

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

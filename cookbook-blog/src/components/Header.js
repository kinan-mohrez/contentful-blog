import React from "react";

export default function Header() {
	
	return (
		<div className="header">
            <h1>Recipes Blog</h1>
            <nav className="navbar">
                <a className="navlink" href="">HOME</a>
                <a className="navlink" href="">VEGAN</a>
                <a className="navlink" href="">VEGETARIAN</a>
                <a className="navlink" href="">TRADITIONELL</a>
                <a className="navlink" href="">FAVORITES</a>
            </nav>
			<form className='search-form'>
				<input type='text' placeholder='Search ....' autoComplete='off' />
				<input type='submit' value='search' />
			</form>
        </div>
	);
}

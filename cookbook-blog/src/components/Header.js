import React from "react";

export default function Header() {
	
	return (
		<div className="header">
            <h1>Recipes Blog</h1>
			<form className='search-form'>
				<input type='text' placeholder='Search ....' autoComplete='off' />
				<input type='submit' value='search' />
			</form>

        </div>
	);
}

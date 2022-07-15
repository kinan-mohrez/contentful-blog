import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink} from "react-router-dom";
import Post from "./Post";
import Vegan from "./Vegan";
import Vegetarian from "./Vegetarian";
import Traditional from "./Traditional";


export default function Header({articles}) {
	
	return (
        <div>
            <h1>Recipes Blog</h1>
			<form className='search-form'>
				<input type='text' placeholder='Search ....' autoComplete='off' />
				<input type='submit' value='search' />
			</form>
		    
                <BrowserRouter>

                    <nav className="navbar">
                        <NavLink to ="/" className="navlink">HOME</NavLink>
                        <NavLink to ="/vegan" className="navlink">VEGAN</NavLink>
                        <NavLink to ="/vegetarian" className="navlink">VEGETARIAN</NavLink>
                        <NavLink to ="/traditional" className="navlink">TRADITIONELL</NavLink>
                    </nav>     

                    <Routes>
                        <Route path='/' element={<Post article={articles} />} />
                        <Route path='/traditional' element={<Traditional article={articles} />} />
                        <Route path='/vegetarian' element={<Vegetarian article={articles} />} />
                        <Route path='/vegan' element={<Vegan article={articles} />} />
                    </Routes>  
                </BrowserRouter>
            
        </div>
	);
}

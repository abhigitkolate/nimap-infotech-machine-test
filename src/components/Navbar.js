import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [query, setQuery] = useState('');

    return (
        <div>
            <nav>
                <div className="logo">
                    <img src="movie-logo.png" alt="" />
                    <h4>MovieApp</h4>
                </div>
                <ul className='menu'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/topRated">Top Rated</Link></li>
                    <li><Link to="/upcoming">Upcoming</Link></li>
                </ul>
                <div className="search">
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" value={query} placeholder='Enter Movie Name' onChange={(e) => setQuery(e.target.value)} />
                        <Link to={`/search?q=${query}`}>
                            <button type='submit'>Search</button>
                        </Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

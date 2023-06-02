import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <section>
            <div>
                <Link to='/'>
                    Preview Plex
                    <img className='' src="" alt="" />
                </Link>
                <Link to='/movies/popular'>Popular</Link>
                <Link to='/movies/top_rated'>Top Rated</Link>
                <Link to='/movies/upcoming'>Upcoming</Link>
            </div>
        </section>
    )
}

export default Header
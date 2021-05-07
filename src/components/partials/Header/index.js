import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderArea } from './styled';
import logo from './../../../assets/images/starwars.png';

const Header = () => {
    return (
        <HeaderArea>
            <div className="container">
                <nav>

                    <div className="menu-mobile">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                    <Link to="/">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </Link>


                    <ul>
                        <li><Link to="/films">Films</Link></li>
                        <li><Link to="/characters/1">People</Link></li>
                        <li><Link to="/species/1">Species</Link></li>
                        <li><Link to="/starships/1">Starships</Link></li>
                        <li><Link to="/Vehicles/1">Vehicles</Link></li>
                        <li><Link to="/planets/1">Planets</Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;
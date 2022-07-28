import React from 'react';
import {NavLink} from 'react-router-dom'
import './style.css'


const Header = () => {

    return (
        <div className="app__header">
            <nav className="header__menu _container">
                <NavLink className="item__link" to={'/#'}>Все котики</NavLink>
                <NavLink className="item__link" to={'/favorite'}>Любимые котики</NavLink>
            </nav>
        </div>
    );
};

export default Header;
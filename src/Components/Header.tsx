import React from 'react';
import img from '../images/playtech.jpg';

const Header = () => {
  return (
        <header>
            <h1>ROBOT FACTORY</h1>
            <a href="https://www.playtech.com/" target="_blank">
                <img src={img} alt="Playtech"/>
            </a>
        </header>
    )
}

export default Header
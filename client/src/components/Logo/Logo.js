import React from 'react';
import './Logo.css'; // Importing the CSS for styling
import logo from '../../utilitys/2024-spotify-logo-icon/Black_White_Logo_Black_RGB.svg'; // Ensure this path is correct for your project structure

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt="Spotify Logo" className="spotify-logo" />
        </div>
    );
}

export default Logo;


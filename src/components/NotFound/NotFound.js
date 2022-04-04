import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container">
            <h1 className="fancy-oops">Oops!</h1>
            <h1 className="text-bold text-3xl font-semibold text-green-900">404-PAGE NOT FOUND</h1>
            <p className="text-xl font-serif mt-4">The page you're looking for might have been removed had it's name changed or it't temporary unavilable.</p>
            <button className="p-3 px-6 bg-blue-600 mt-4 rounded-full text-lg font-bold text-white font-mono mb-5">
                <Link to="/">GO TO HOME PAGE</Link>
            </button>
        </div>
    );
};

export default NotFound;
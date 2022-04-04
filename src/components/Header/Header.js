import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImLeaf } from 'react-icons/im';

const Header = () => {
    return (
        <nav className="flex justify-center items-center sticky top-0 bg-green-100 md:justify-between px-4 h-[100px]">
            <div className='flex text-green-500'>
                <h1 className="font-mono text-3xl hidden md:block font-bold hover:text-orange-300 ">Laptop Review</h1>
                <h1><ImLeaf /></h1>

            </div>
            
            <div className="flex gap-4 text-xl font-sans font-bold text-emerald-500 hover:text-blue-700 uppercase">
                <NavLink to='/' className={({ isActive }) => isActive ? "text-orange-400 underline underline-offset-4" : ""}>
                    Home
                </NavLink>

                <NavLink to='/reviews' className={({ isActive }) => isActive ? "text-orange-400 underline underline-offset-4" : ""}>
                    Reviews
                </NavLink>

                <NavLink to='/dashboard' className={({ isActive }) => isActive ? "text-orange-400 underline underline-offset-4" : ""}>
                    Dashboard
                </NavLink>

                <NavLink to='/blogs' className={({ isActive }) => isActive ? "text-orange-400 underline underline-offset-4" : ""}>
                    Blogs
                </NavLink>

                <NavLink to='/about' className={({ isActive }) => isActive ? "text-orange-400 underline underline-offset-4" : ""}>
                    About
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;
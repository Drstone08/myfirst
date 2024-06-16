// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faHome, faInfoCircle, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import About from './About';

const Nav = () => {
    return (
        <>
        <div className='fixed top-0 left-0 right-0 bg-[#1A1A1A] text-white py-4 px-8 flex justify-between z-50'>
            <div className='flex items-center mr-4'>
                <img src={logo} alt='logo' className='h-12' />
            </div>
            <div className='flex items-center'>
                <ul className='flex justify-end px-3 space-x-7 text-lg cursor-pointer text-white font'>
                    <li className='hover:text-blue-800'>
                        <FontAwesomeIcon icon={faHome} />
                        <Link to="/home">Home</Link>
                    </li>
                    <li className='hover:text-blue-800'>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        <Link to="/about">About</Link>
                    </li>
                    <li className='hover:text-blue-800'>
                        <FontAwesomeIcon icon={faTasks} />
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li className='hover:text-blue-800'>
                        <FontAwesomeIcon icon={faProjectDiagram} />
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className='hover:text-blue-800'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>

        </>
    );
};

export default Nav;

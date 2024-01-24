import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [activeSection, setActiveSection ] = useState('About Me');

    const navigationItems = [
        { name: 'About Me', path: '/about-me' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
        { name: 'Resume', path: '/resume' }
    ];

    const handleNavigationClick = (section) => {
        setActiveSection(section);
    };

    return (
        <nav>
            {navigationItems.map(item=> (
                <Link
                key={item.name}
                to={item.path}
                className={activeSection === item.name ? 'active' : ''}
                onClick={() => handleNavigationClick(item.name)} 
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    );
};
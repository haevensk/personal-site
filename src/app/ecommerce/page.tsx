import React, { useState } from 'react';
import './page.css';

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="page">
            <div className='header-bar'>

                <button className="navigation-button" onClick={toggleSidebar}>
                    Navigation
                </button>
            </div>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                {/* Sidebar content */}
            </div>
            <div className="content">
                {/* Main content */}
            </div>
        </div>
    );
};

export default Page;

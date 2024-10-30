import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import LanguageSwitcher from './LanguageSwitcher';
import UserProfile from './UserProfile';
import './styles.css';

const Menu = () => {
  const user = { name: 'Esther', email: 'esther@example.com' };

  return (
    <div className="menuContainer">
      <Sidebar />
      <div className="main-content">
        <Dashboard />
        <UserProfile user={user} />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Menu;

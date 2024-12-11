import React from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import NavLink from './NavLink';

const navItems = [
  'Home',
  'About Us',
  'Services',
  'Case Studies',
  'Blog',
  'Contact'
];

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Logo className="h-12 w-12" />
            <span className="ml-3 text-xl font-bold text-white">SAIGE.systems</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
              >
                {item}
              </NavLink>
            ))}
          </nav>
          
          <button className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
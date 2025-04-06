'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  language?: 'he' | 'en';
}

const Header: React.FC<HeaderProps> = ({ language = 'he' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { id: 'home', label: t('Home') },
    { id: 'about', label: t('About') },
    { id: 'services', label: t('Services') },
    { id: 'contact', label: t('Contact') },
  ];

  const isRTL = language === 'he';
  const dir = isRTL ? 'rtl' : 'ltr';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary">
              aassa
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className={`flex space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-800 hover:text-secondary font-medium text-lg cursor-pointer transition-colors duration-300 relative group"
                    activeClass="text-primary font-bold"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-primary transition-colors duration-300"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} w-full h-screen bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden z-40`}
      >
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-serif font-bold text-primary">
              aassa
            </h1>
            <button
              onClick={closeMenu}
              className="text-gray-800 hover:text-primary transition-colors duration-300"
              aria-label="Close menu"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <nav>
            <ul className="space-y-6">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-800 hover:text-secondary text-xl font-medium block transition-colors duration-300"
                    activeClass="text-primary font-bold"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
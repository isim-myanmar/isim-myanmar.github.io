import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import gsap from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useContext(LanguageContext);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Header animation
    gsap.fromTo('.header-animate', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', key: 'home' },
    { path: '/about', key: 'about' },
    { path: '/compatibility', key: 'compatibility' },
    { path: '/how-it-works', key: 'howItWorks' },
    { path: '/faq', key: 'faq' },
    { path: '/contact', key: 'contact' },
    { path: '/partners', key: 'partners' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-animate ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="https://i.ibb.co/svLmsKwr/isim-logo-12-YD0wby5y6-BCx4-Ro2.png" 
              alt="iSIM Myanmar Logo" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
              iSIM Myanmar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 hover:text-primary-600 ${
                  location.pathname === item.path ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                {t(`nav.${item.key}`)}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('my')}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
                  language === 'my' 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                MM
              </button>
            </div>

            {/* Get Started Button */}
            <Link 
              to="/contact" 
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('nav.getStarted')}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 font-medium transition-colors duration-300 hover:text-primary-600 hover:bg-gray-50 rounded-lg ${
                  location.pathname === item.path ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 mx-4 py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white text-center font-medium rounded-full transition-all duration-300"
            >
              {t('nav.getStarted')}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
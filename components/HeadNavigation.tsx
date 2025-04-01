"use client"
import { useState, useEffect } from 'react';
import { Menu, X, Twitter, Facebook, Dribbble, Instagram, Youtube } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialIcons = [
    { Icon: Twitter, name: 'Twitter', color: '#1DA1F2' },
    { Icon: Facebook, name: 'Facebook', color: '#1877F2' },
    { Icon: Dribbble, name: 'Dribbble', color: '#EA4C89' },
    { Icon: Instagram, name: 'Instagram', color: '#E1306C' },
    { Icon: Youtube, name: 'Youtube', color: '#FF0000' },
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      color: '#d20ac3',
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      y: -3,
      color: '#d20ac3',
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center lg:px-8">
        {/* Logo */}
        <Link href="/" className="logo">
          <motion.img 
            src="/assets/images/logo.png" 
            alt="Logo" 
            className={`w-16 h-16 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          <ul className="flex gap-8">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.path}
                custom={i}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={navItemVariants}
              >
                <Link 
                  href={link.path}
                  className="text-blue-900 font-bold text-lg relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d20ac3] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <motion.div 
          className="hidden lg:flex gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {socialIcons.map(({ Icon, name, color }) => (
            <motion.a 
              key={name} 
              href="#" 
              className="text-blue-900"
              whileHover="hover"
              variants={socialIconVariants}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button 
          onClick={toggleMenu} 
          className="lg:hidden text-blue-900 p-2 rounded-full hover:bg-blue-900/10 transition-colors"
          aria-label="Open menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={28} />
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay - Increased z-index */}
              <motion.div
                onClick={closeMenu}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              
              {/* Mobile Drawer - Higher z-index than overlay */}
              <motion.nav 
                className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-8 lg:hidden z-[70]`}
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <div className="flex justify-between items-center mb-12">
                  <img src="/assets/images/logo-light.png" alt="Logo" className="w-16 h-16" />
                  <motion.button 
                    onClick={toggleMenu} 
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Close menu"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <ul className="space-y-6 mb-12">
                  {navLinks.map((link, i) => (
                    <motion.li 
                      key={link.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <Link 
                        href={link.path}
                        className="block py-3 text-xl font-bold hover:text-[#d20ac3] transition-colors flex items-center gap-3"
                        onClick={closeMenu}
                      >
                        <span className="w-2 h-2 bg-[#d20ac3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Contact Info in Mobile Menu */}
                <motion.div 
                  className="mb-12 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <a href="mailto:info@email.com" className="block hover:text-[#d20ac3] transition-colors flex items-center gap-3">
                    <span className="w-5 h-5 bg-[#d20ac3] rounded-full flex items-center justify-center text-white text-xs">@</span>
                    info@email.com
                  </a>
                  <a href="tel:001234567890" className="block hover:text-[#d20ac3] transition-colors flex items-center gap-3">
                    <span className="w-5 h-5 bg-[#d20ac3] rounded-full flex items-center justify-center text-white text-xs">#</span>
                    00 (123) 456 78 90
                  </a>
                </motion.div>

                <motion.ul 
                  className="flex gap-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {socialIcons.map(({ Icon, name, color }) => (
                    <motion.li 
                      key={name}
                      whileHover={{ y: -3, scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a href="#" className="hover:text-[#d20ac3] transition-colors">
                        <Icon size={22} />
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

{/*"use client"
import { useState, useEffect } from 'react';
import { Menu, X, Twitter, Facebook, Dribbble, Instagram, Youtube } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  //const navLinks = ['Home', 'About', 'Projects', 'Contact'];
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];
  const socialIcons = [
    { Icon: Twitter, name: 'Twitter', color: '#1DA1F2' },
    { Icon: Facebook, name: 'Facebook', color: '#1877F2' },
    { Icon: Dribbble, name: 'Dribbble', color: '#EA4C89' },
    { Icon: Instagram, name: 'Instagram', color: '#E1306C' },
    { Icon: Youtube, name: 'Youtube', color: '#FF0000' },
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      color: '#d20ac3',
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      y: -3,
      color: '#d20ac3',
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center lg:px-8">
        {/* Logo *
        <motion.a 
          href="#" 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/assets/images/logo.png" 
            alt="Logo" 
            className={`w-16 h-16 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}
          />
        </motion.a>

        {/* Desktop Navigation *
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
        <ul className="flex gap-8">
          {navLinks.map((link, i) => (
            <motion.li 
              key={link.path}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={navItemVariants}
            >
              <Link 
                href={link.path}
                className="text-blue-900 font-bold text-lg relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d20ac3] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>


        {/* Social Icons *
        <motion.div 
          className="hidden lg:flex gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {socialIcons.map(({ Icon, name, color }) => (
            <motion.a 
              key={name} 
              href="#" 
              className="text-blue-900"
              whileHover="hover"
              variants={socialIconVariants}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile Menu Button *
        <motion.button 
          onClick={toggleMenu} 
          className="lg:hidden text-blue-900 p-2 rounded-full hover:bg-blue-900/10 transition-colors"
          aria-label="Open menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={28} />
        </motion.button>

        {/* Mobile Navigation *
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.nav 
                className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-8 lg:hidden z-50`}
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <div className="flex justify-between items-center mb-12">
                  <img src="/assets/images/logo-light.png" alt="Logo" className="w-16 h-16" />
                  <motion.button 
                    onClick={toggleMenu} 
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Close menu"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <ul className="space-y-6 mb-12">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link 
                      href={link.path}
                      className="block py-3 text-xl font-bold hover:text-[#d20ac3] transition-colors flex items-center gap-3"
                      onClick={closeMenu}
                    >
                      <span className="w-2 h-2 bg-[#d20ac3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

                {/* Contact Info in Mobile Menu *
                <motion.div 
                  className="mb-12 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <a href="mailto:info@email.com" className="block hover:text-[#d20ac3] transition-colors flex items-center gap-3">
                    <span className="w-5 h-5 bg-[#d20ac3] rounded-full flex items-center justify-center text-white text-xs">@</span>
                    info@email.com
                  </a>
                  <a href="tel:001234567890" className="block hover:text-[#d20ac3] transition-colors flex items-center gap-3">
                    <span className="w-5 h-5 bg-[#d20ac3] rounded-full flex items-center justify-center text-white text-xs">#</span>
                    00 (123) 456 78 90
                  </a>
                </motion.div>

                <motion.ul 
                  className="flex gap-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {socialIcons.map(({ Icon, name, color }) => (
                    <motion.li 
                      key={name}
                      whileHover={{ y: -3, scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a href="#" className="hover:text-[#d20ac3] transition-colors">
                        <Icon size={22} />
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.nav>

              {/* Overlay *
              <motion.div
                onClick={closeMenu}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm lg:hidden z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
*/}
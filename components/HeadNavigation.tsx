"use client"
import { useState, useEffect } from 'react';
import { Menu, X, Twitter, Facebook, Dribbble, Instagram, Youtube } from 'react-feather';

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

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];
  const socialIcons = [
    { Icon: Twitter, name: 'Twitter' },
    { Icon: Facebook, name: 'Facebook' },
    { Icon: Dribbble, name: 'Dribbble' },
    { Icon: Instagram, name: 'Instagram' },
    { Icon: Youtube, name: 'Youtube' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-3 flex justify-between items-center lg:px-10">
        {/* Logo */}
        <a href="#" className="logo">
          <img src="/assets/images/logo.png" alt="Logo" className="w-20 h-20" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-blue-900 hover:text-[#d20ac3] transition font-bold">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="hidden lg:flex gap-4">
          {socialIcons.map(({ Icon, name }) => (
            <a key={name} href="#" className="text-blue-900 hover:text-[#d20ac3]">
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-blue-900" aria-label="Open menu">
          <Menu size={32} />
        </button>

        {/* Mobile Navigation */}
        <nav className={`fixed top-0 left-0 h-full w-72 bg-blue-900 text-white p-6 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden z-50`}>
          <div className="flex justify-between items-center mb-8">
            <img src="/assets/images/logo-light.png" alt="Logo" className="w-20 h-20" />
            <button onClick={toggleMenu} className="p-1 rounded-full bg-white/10 hover:bg-white/20" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          <ul className="space-y-4 mb-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="block py-2 font-bold hover:text-[#d20ac3]" onClick={closeMenu}>
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Info in Mobile Menu */}
          <div className="mb-8 space-y-2">
            <a href="mailto:info@email.com" className="block hover:text-[#d20ac3]">
              info@email.com
            </a>
            <a href="tel:001234567890" className="block hover:text-[#d20ac3]">
              00 (123) 456 78 90
            </a>
          </div>

          <ul className="flex gap-4">
            {socialIcons.map(({ Icon, name }) => (
              <li key={name}>
                <a href="#" className="hover:text- [#d20ac3]">
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Overlay */}
        <div
          onClick={closeMenu}
          className={`fixed inset-0 bg-black transition-opacity ${
            isMenuOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'
          } lg:hidden`}
        />
      </div>
    </header>
  );
}
{/*import { motion } from 'framer-motion';
import { Envelope, Phone, MapPin, LinkedinLogo, TwitterLogo, InstagramLogo, RocketLaunch } from 'phosphor-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Solutions',
      links: ['AI Integration', 'Cloud Systems', 'Data Analytics', 'IoT Networks']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Case Studies', 'Press']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Whitepapers', 'Webinars', 'API Docs']
    }
  ];

  const socialIcons = [
    { icon: <LinkedinLogo size={24} />, label: 'LinkedIn' },
    { icon: <TwitterLogo size={24} />, label: 'Twitter' },
    { icon: <InstagramLogo size={24} />, label: 'Instagram' }
  ];

  return (
    <footer className="relative bg-white border-t border-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer Content *
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Column *
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <RocketLaunch size={32} className="text-[#d20ac3]" />
              <span className="text-2xl font-bold text-blue-900">Enlightened Future Hub</span>
            </div>
            <p className="text-gray-600">
              Pioneering tomorrow's solutions through intelligent innovation
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -4 }}
                  className="text-blue-900 hover:text-[#d20ac3] transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns *
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-600 hover:text-[#d20ac3] transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column *
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Envelope size={20} className="text-[#d20ac3]" />
                <span className="text-gray-600">contact@futurehub.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#d20ac3]" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#d20ac3]" />
                <span className="text-gray-600">Silicon Valley, CA</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter *
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-blue-900/5 rounded-xl p-8 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Stay Ahead with Innovation Insights
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border-2 border-blue-900/10 focus:border-[#d20ac3] focus:ring-0"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d20ac3] text-white px-8 py-3 rounded-lg font-semibold"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Copyright *
        <div className="border-t border-blue-900/10 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Enlightened Future Hub. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Elements *
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/5 to-transparent -z-10" />
    </footer>
  );
};

export default Footer;*/}

import { motion } from 'framer-motion';
import { Envelope, Phone, MapPin, LinkedinLogo, TwitterLogo, InstagramLogo, RocketLaunch } from 'phosphor-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Solutions',
      links: ['AI Integration', 'Cloud Systems', 'Data Analytics', 'IoT Networks']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Case Studies', 'Press']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Whitepapers', 'Webinars', 'API Docs']
    }
  ];

  const socialIcons = [
    { icon: <LinkedinLogo weight="duotone" size={24} />, label: 'LinkedIn', color: 'hover:text-[#0077b5]' },
    { icon: <TwitterLogo weight="duotone" size={24} />, label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
    { icon: <InstagramLogo weight="duotone" size={24} />, label: 'Instagram', color: 'hover:text-[#E1306C]' }
  ];

  const contactInfo = [
    { icon: <Envelope weight="duotone" size={24} />, text: 'futurecreativehub@gmail.com' },
    { icon: <Phone weight="duotone" size={24} />, text: '+254 112 265344' },
    { icon: <MapPin weight="duotone" size={24} />, text: 'Garden Estate NBO-Kenya' }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-blue-50 border-t border-blue-900/10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-20 w-80 h-80 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
        >
          {/* Brand Column */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ rotate: 45 }}
                className="bg-gradient-to-br from-[#d20ac3] to-blue-900 p-2 rounded-lg"
              >
                <RocketLaunch size={32} weight="duotone" className="text-white" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
                Enlightened Future Hub
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Pioneering tomorrow's digital solutions through intelligent innovation and transformative technology.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-blue-900 ${social.color} transition-colors p-2 rounded-full bg-white shadow-sm hover:shadow-md`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              className="space-y-5"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-3">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#d20ac3] transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[#d20ac3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div
            variants={itemVariants}
            className="space-y-5"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Connect With Us</h3>
            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-[#d20ac3]/10 p-2 rounded-lg text-[#d20ac3]">
                    {info.icon}
                  </div>
                  <span className="text-gray-600">{info.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-900/5 to-[#d20ac3]/5 rounded-2xl p-10 mb-16 border border-blue-900/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Stay Ahead with <span className="text-[#d20ac3]">Innovation Insights</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-blue-900/10 focus:border-[#d20ac3] focus:ring-0 text-lg shadow-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(210, 10, 195, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#d20ac3] to-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-blue-900/10 pt-8 text-center"
        >
          <p className="text-gray-600">
            © {new Date().getFullYear()} Enlightened Future Hub. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
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
    { icon: <LinkedinLogo size={24} />, label: 'LinkedIn' },
    { icon: <TwitterLogo size={24} />, label: 'Twitter' },
    { icon: <InstagramLogo size={24} />, label: 'Instagram' }
  ];

  return (
    <footer className="relative bg-white border-t border-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Column */}
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

          {/* Links Columns */}
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

          {/* Contact Column */}
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

        {/* Newsletter */}
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

        {/* Copyright */}
        <div className="border-t border-blue-900/10 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Enlightened Future Hub. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/5 to-transparent -z-10" />
    </footer>
  );
};

export default Footer;
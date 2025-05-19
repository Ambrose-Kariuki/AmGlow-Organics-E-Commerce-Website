import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const { cartItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/images/logo.png" alt="AmGlow Organics" className="h-12" />
            <span className="text-xl font-bold hidden sm:block">AmGlow Organics</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <motion.span 
                className={`cursor-pointer hover:text-green-200 ${router.pathname === link.path ? 'border-b-2 border-white' : ''}`}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/cart">
            <motion.div 
              className="relative cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((a, c) => a + c.quantity, 0)}
                </span>
              )}
            </motion.div>
          </Link>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-green-700 px-4 py-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path}>
                <span 
                  className={`block py-1 ${router.pathname === link.path ? 'text-green-200 font-bold' : 'text-white'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
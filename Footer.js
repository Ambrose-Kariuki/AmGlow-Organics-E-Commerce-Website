import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AmGlow Organics</h3>
            <p className="mb-4">Premium health and beauty products made with organic ingredients for your natural glow.</p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ y: -2 }}
                className="hover:text-green-300"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -2 }}
                className="hover:text-green-300"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -2 }}
                className="hover:text-green-300"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="hover:text-green-300 cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="hover:text-green-300 cursor-pointer">Products</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-green-300 cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-green-300 cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>123 Organic Way</p>
              <p>Greenville, SC 29601</p>
              <p className="my-2">Email: info@amgloworganics.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} AmGlow Organics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
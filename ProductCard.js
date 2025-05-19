import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link href={`/products/${product.id}`}>
        <div className="cursor-pointer">
          <div className="h-48 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon 
                  key={i}
                  icon={faStar} 
                  className={`text-sm ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
              <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
            </div>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-green-700 font-bold">${product.price.toFixed(2)}</span>
              {product.stock > 0 ? (
                <span className="text-xs text-green-600">In Stock</span>
              ) : (
                <span className="text-xs text-red-600">Out of Stock</span>
              )}
            </div>
          </div>
        </div>
      </Link>
      
      <button 
        onClick={() => addToCart(product)}
        disabled={product.stock <= 0}
        className={`w-full py-2 px-4 flex items-center justify-center space-x-2 ${product.stock > 0 ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{product.stock > 0 ? 'Add to Cart' : 'Sold Out'}</span>
      </button>
    </motion.div>
  );
}
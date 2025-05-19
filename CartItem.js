import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext';

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <motion.li 
      className="px-4 py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4">
        <div className="md:col-span-5 flex items-center">
          <div className="flex-shrink-0 h-20 w-20 rounded-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4">
            <Link href={`/products/${item.id}`}>
              <span className="text-sm font-medium text-gray-900 hover:text-green-700 cursor-pointer">
                {item.name}
              </span>
            </Link>
          </div>
        </div>

        <div className="md:col-span-2 flex md:block items-center">
          <span className="md:hidden text-sm text-gray-500 mr-2">Price:</span>
          <span className="text-gray-900 md:text-center">${item.price.toFixed(2)}</span>
        </div>

        <div className="md:col-span-3 flex md:block items-center">
          <span className="md:hidden text-sm text-gray-500 mr-2">Qty:</span>
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-2 py-1 text-center w-8">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        <div className="md:col-span-2 flex md:block items-center justify-between">
          <span className="md:hidden text-sm text-gray-500">Total:</span>
          <span className="text-gray-900 md:text-right">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-4 md:ml-0 text-gray-400 hover:text-gray-500"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </motion.li>
  );
}
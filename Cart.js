import { motion } from 'framer-motion';
import Link from 'next/link';
import CartItem from './CartItem';
import { useCart } from '../../context/CartContext';

export default function Cart() {
  const { cartItems, cartTotal, clearCart } = useCart();

  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Your cart is empty</h2>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-6 py-3 rounded-md font-medium"
              >
                Continue Shopping
              </motion.button>
            </Link>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-8">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="border-b border-gray-200 px-4 py-3 hidden md:grid grid-cols-12">
                  <div className="col-span-5 font-medium text-gray-700">Product</div>
                  <div className="col-span-2 font-medium text-gray-700 text-center">Price</div>
                  <div className="col-span-3 font-medium text-gray-700 text-center">Quantity</div>
                  <div className="col-span-2 font-medium text-gray-700 text-right">Total</div>
                </div>

                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </ul>

                <div className="border-t border-gray-200 px-4 py-3 flex justify-end">
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 mt-6 lg:mt-0">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">Free</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-3">
                    <span className="text-gray-900 font-medium">Total</span>
                    <span className="text-gray-900 font-bold">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Link href="/checkout">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium"
                  >
                    Proceed to Checkout
                  </motion.button>
                </Link>

                <div className="mt-4 text-center text-sm text-gray-500">
                  or{' '}
                  <Link href="/products">
                    <span className="text-green-600 hover:text-green-800 font-medium cursor-pointer">
                      Continue Shopping
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
// Ensure _app.js wraps with CartProvider
import { CartProvider } from '../context/CartContext';
function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
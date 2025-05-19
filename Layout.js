import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - AmGlow Organics` : 'AmGlow Organics'}</title>
        <meta name="description" content="Premium Health and Beauty Products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
      
      <ToastContainer position="bottom-center" limit={1} />
    </>
  );
}
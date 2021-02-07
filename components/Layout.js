import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Listy</title>
        <meta name="keywords" content="lists" />
      </Head>
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

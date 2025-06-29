import { Routes, Route } from 'react-router-dom';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import HomePage from '@/components/pages/HomePage';

const Layout = () => {
  return (
<div className="min-h-screen bg-neutral-light">
      <Header />
      
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Branches from './pages/Branches';
import Story from './pages/Story';
import Compare from './pages/Compare';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/story" element={<Story />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
      <Footer />
    </>
  );
}

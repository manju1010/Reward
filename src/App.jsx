import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Creaters from './pages/Creaters';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { FeedPage } from './pages/FeedPage';
import { DashboardPage } from './pages/DashboardPage';


const App = () => {
  return (
    <Router>
      <div className='mx-4 sm:mx-[10%]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/creaters' element={<Creaters />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

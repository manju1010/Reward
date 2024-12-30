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
import { UserLevel } from './components/UserLevel';  // Import UserLevel component
import networkUsers from './data/networkUsers';  // Import networkUsers data
import Analytics from './pages/Analytics';

const App = () => {
  // Select the user you want to display, for example, the first user from networkUsers
  const userStats = networkUsers[0]; // Modify this to display a different user if needed
  
  return (
    <Router>
      <div className='mx-4 sm:mx-[10%]'>
        <Navbar />
        
        {/* Pass userStats as a prop to UserLevel */}
        <UserLevel stats={userStats} />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/creaters' element={<Creaters />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;

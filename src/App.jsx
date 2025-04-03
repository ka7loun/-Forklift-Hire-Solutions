import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Equipment from './pages/Equipment';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import BuyForklift from './pages/BuyForklift';
import ForkliftHire from './pages/ForkliftHire';
import TransportRemovals from './pages/TransportRemovals';
import ForkliftSales from './pages/ForkliftSales';
import TemporaryRecruitment from './pages/TemporaryRecruitment';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buy" element={<BuyForklift />} />
          <Route path="/forklift-hire" element={<ForkliftHire />} />
          <Route path="/transport-removals" element={<TransportRemovals />} />
          <Route path="/forklift-sales" element={<ForkliftSales />} />
          <Route path="/recruitment" element={<TemporaryRecruitment />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
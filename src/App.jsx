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

function App() {
  // Get the base URL from Vite's environment
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path={baseUrl} element={<Home />} />
          <Route path={`${baseUrl}equipment`} element={<Equipment />} />
          <Route path={`${baseUrl}pricing`} element={<Pricing />} />
          <Route path={`${baseUrl}booking`} element={<Booking />} />
          <Route path={`${baseUrl}contact`} element={<Contact />} />
          <Route path={`${baseUrl}buy`} element={<BuyForklift />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
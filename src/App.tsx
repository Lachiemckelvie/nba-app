import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GamesProvider } from './context/GamesContext';
import { Home } from './pages/Home'; // Home imported as a named export

export const App: React.FC = () => {
  return (
    <GamesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </GamesProvider>
  );
};
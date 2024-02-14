import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GamesProvider } from './context/GamesContext';
import { Home } from './pages/Home/Home';
import { Header } from './system/Header/Header'
import './variables.scss';
import './globals.scss';

export const App: React.FC = () => {
  return (
    <GamesProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </GamesProvider>
  );
};
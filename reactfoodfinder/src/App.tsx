import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import RestaurantDetail from './components/RestaurantDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          </Routes>
        </main>
        <footer>
          <p>© 2023 AtlantaFoodFinder. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

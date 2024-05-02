// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import NewTestCase from './components/NewTestCase';
import Projects from './components/Projects';
import TestData from './components/TestData';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/new-test-case">New Test Case</Link> |{" "}
          <Link to="/projects">Projects</Link> |{" "}
          <Link to="/test-data">Test Data</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-test-case" element={<PrivateRoute><NewTestCase /></PrivateRoute>} />
          <Route path="/projects" element={<PrivateRoute><Projects /></PrivateRoute>} />
          <Route path="/test-data" element={<PrivateRoute><TestData /></PrivateRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

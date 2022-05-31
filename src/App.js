import React from "react";
import Homepage from "./pages/Homepage";
import Subreddit from "./pages/Subreddit";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Homepage/>
      </Router>
  );
}

export default App;

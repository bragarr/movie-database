import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from './components/App/App';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Movie />} />
          <Route path="/" element={<search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
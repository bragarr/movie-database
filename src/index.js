import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {BrowserRouter, Routes, Route} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<home />} />
          <Route path="./components/Movie/Movie" element={<movie />} />
          <Route path="/" element={<search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import HomePage from './components/HomePage';
import Analysis from './components/Analysis';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <>
      <div className="bg-image"></div>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="analysis" element={<Analysis />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;

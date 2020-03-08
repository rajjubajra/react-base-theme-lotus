import React from 'react';
import Router from './Lotus/Router';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import CopyRightFooter from './Lotus/CopyRightFooter';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
        <CopyRightFooter />
      </BrowserRouter>

    </>
  );
}

export default App;

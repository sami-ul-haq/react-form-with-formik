import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Form';
import Thankyou from './Thankyou';

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Form />}/>
    <Route path="/thank-you" element={<Thankyou />}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
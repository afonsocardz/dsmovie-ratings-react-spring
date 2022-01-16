import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Listing from 'pages/Listing'
import Form from 'pages/Form'
import Navbar from 'components/Navbar'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

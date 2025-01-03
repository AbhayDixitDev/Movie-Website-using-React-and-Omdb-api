import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import Favourites from './pages/favourite'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="home" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="webseries" element={<WebSeries />} />
        <Route path="favourites" element={<Favourites />} />
      </Route>
    </Routes>
    
    
    </BrowserRouter>
  )
}


function Movies() {
  return <h1>Movies</h1>
}

function WebSeries() {
  return <h1>Web Series</h1>
}


export default App
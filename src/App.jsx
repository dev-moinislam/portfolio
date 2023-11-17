import { Box } from '@mui/material'
import './App.css'
import Header from './components/header/Header'
import { Outlet,useLocation } from 'react-router-dom'
import React, { useEffect } from 'react';


function App() {
  
  const location = useLocation();

  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header/>
      <Box sx={{mt:9}}>
        <Outlet/>
      </Box>
    </>
  )
}

export default App

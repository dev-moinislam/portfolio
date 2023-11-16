import { Box } from '@mui/material'
import './App.css'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'


function App() {

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

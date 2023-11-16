import * as React from 'react';
/* ----------------------------- MUI COMPONENTS ----------------------------- */
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { Grid } from '@mui/material';
/* -------------------------------- MUI ICON -------------------------------- */
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';



const pages = [
    { label: 'Home', path: '/',icon: <HomeOutlinedIcon/>},
    { label: 'About', path: '/about',icon:<AccountBoxOutlinedIcon/> },
    { label: 'Skills', path:'/skills',icon:<DescriptionOutlinedIcon/>},
    { label: 'Services', path:'/services',icon:<BusinessCenterOutlinedIcon/>},
    { label: 'Portfolio', path:'/portfolio',icon:<BrokenImageOutlinedIcon/>},
    { label: 'Contact', path:'/contact',icon:<NearMeOutlinedIcon/>},

  ]

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleOpenNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

    return (
    <React.Fragment>
        <CssBaseline />
        {/* /* ------------------------- Large device Style ------------------------ */ }
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',sm:'flex'} }}>
            <AppBar sx={{ 
                    position:'fixed',
                    boxShadow:'none',
                    background: 'rgba(255, 255, 255, 0.48)',
                    borderRradius: '16px',
                    backdropFilter:'blur(5px)',
                    WebkitBackdropFilter:'blur(5px)'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <Typography
                        variant="p"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                        ml:5,
                        display: { xs: 'flex', md: 'flex' },
                        flexGrow: 1,
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize:'1rem',
                        letterSpacing: '.2rem',
                        color: '#551a8b',
                        textDecoration: 'none',
                        }}
                    >
                        DevMoin
                    </Typography>

                    <Box sx={{  display: { xs: 'flex', md: 'flex' }}}>
                        {pages.map((page,index) => (
                            <Button
                                component={Link}
                                key={index}
                                to={page.path}
                                sx={{ my: 1,color: location.pathname === `${page.path}` ? 'GrayText' : 'black',fontFamily: 'Poppins',fontWeight:400,textTransform:'none',fontSize:'14px'}}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>

        {/* /* ------------------------- Mobile Responsive Style ------------------------ */ }
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',sm:'none'} }}>
            <AppBar
                position="fixed"
                color="primary"
                sx={{
                    top: 'auto',
                    bottom: isMenuOpen ? 0 : -90,
                    transition: 'bottom 0.3s',
                    background: '#f3f2f7',
                    borderRradius: '16px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter:'blur(5px)',
                    WebkitBackdropFilter:'blur(5px)'
                }}
            >
                <Toolbar>
                    <Typography
                    variant="h6"
                    noWrap
                    component={Link}
                    to='/'
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'flex' },
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    letterSpacing: '.2rem',
                    color: '#551a8b',
                    textDecoration: 'none',
                    }}
                    >
                        DevMoin
                    </Typography>
                    
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="#551a8b"
                    >
                        <FingerprintIcon/>
                    </IconButton>
                </Toolbar>
                <Box sx={{ mb:'10px',ml:'30px'}}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {pages.map((page, index) => (
                            <Grid item xs={4} key={index} >
                                <Button
                                    component={Link}
                                    key={index}
                                    to={page.path}
                                    sx={{ color: location.pathname === `${page.path}` ? 'GrayText' : 'black',fontFamily: 'Poppins',fontWeight:400,textTransform:'none',fontSize:'14px',gap:'5px'}}
                                >
                                    {page.icon} {page.label}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </AppBar>
        </Box>
    </React.Fragment>
      );
}

export default Header
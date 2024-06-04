import React from 'react'
import { Social } from './Social'
import { Avatar, Box, Button, CardContent, Grid, Typography } from '@mui/material'
import Typed from 'typed.js';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';




const Data = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        /* ----------------------------- Use of Typed.js ---------------------------- */
      const typed = new Typed(el.current, {
        strings: ['Web Developer','Mern Developer','React.js Developer','Next.js Developer'],
        typeSpeed: 60,
        loop: true,
        loopCount: Infinity,
        backDelay: 700,
        backSpeed: 40,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
/* ----------------------------- End of typed js ---------------------------- */

  return (
    <Box sx={{ flexGrow: 1 ,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Social/>
      </Grid>
      <Grid item xs={10} >
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={3} sx={{display:'flex',flexWrap:'wrap-reverse'}}>
                <Box sx={{height:'100vh',width:'100vw',display:'flex',flexDirection:'row',flexWrap:'wrap-reverse',justifyContent:'center',alignItems:'center',mt:2 }}>
                    <Box sx={{maxWidth:'500px'}} >
                        <CardContent sx={{ letterSpacing:'.2rem',fontFamily:'Poppins' }}>
                            <Typography component="div" variant="h3" sx={{letterSpacing:'.2rem',fontFamily:'Poppins',fontWeight:{xs:'400',sm:'400',md:'600'}}}>
                                Moin Islam
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary"  component="div">
                                ------------- <span ref={el} />
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary"  component="div" sx={{maxWidth:{md:'300px',xs:'300px',sm:'450px'}}} >
                            "🚀 MERN Developer | Crafting digital magic with MongoDB, Express.js, React, Next.js and Node.js. Let's build the future together! ✨"
                            </Typography>
                            <Button variant="contained" endIcon={<NearMeOutlinedIcon />}
                                sx={{
                                    mt:2,
                                    mb:5,
                                    fontFamily:'Poppins',
                                    bgcolor:'black',
                                    '&:hover': {
                                    bgcolor: 'GrayText',
                                    }}} >
                                    Say Hello
                            </Button>
                        </CardContent>
                    </Box>
                    <Box sx={{maxWidth:"300px",ml:{md:13,lg:23}}}>
                        <Avatar
                            alt="Remy Sharp"
                            src="portfolio.png"
                            sx={{width:'250px',height:'250px' }}
                            variant="rounded"
                        />
                    </Box>
                </Box>
            </Grid>
        </Box>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Data
import React from 'react'
import { Box,Button,Card,CardContent,TextField,Typography } from '@mui/material'
import { CiLocationArrow1 } from "react-icons/ci";

const ContactForm = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1, maxWidth: '500px' }}>
          <Typography gutterBottom variant="h1" component="div" sx={{ fontSize: '30px', textAlign: 'center',mb:5 ,fontFamily:'Poppins'}}>
            Write me your project
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5 }}>
          <Card sx={{ minWidth: '320px', textAlign: 'center',p:3 }}>
                    <CardContent>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField
                            id="outlined-number"
                            label="Name"
                            type='text'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-number"
                            label="Email"
                            type='text'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Project"
                            multiline
                            rows={4}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    </CardContent>
                  <Button variant="contained" 
                    sx={{textTransform:'none',bgcolor:'transparent',fontFamily:'Poppins',boxShadow:'none',color:'grayText',
                    '&:hover': {
                    bgcolor: 'transparent',
                    boxShadow:'none'
                    }}} endIcon={<CiLocationArrow1 />}>
                      Send me
                  </Button>
                </Card>
          </Box>
        </Box>
  )
}

export default ContactForm
import React from 'react'
import { Avatar, Box, Button, ButtonGroup, Card, CardActionArea, CardContent, Grid,Typography } from '@mui/material'
import { useState } from 'react';

import { TbWorldWww } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";
import { FaMarkdown } from "react-icons/fa";


const projects = [
  { id: 1, title: 'URL Shortener',img:'url.png', categories: ['ReactJs' ]},
  { id: 2, title: 'Blood Bank',img:'bloodBank.png', categories: ['NextJs','Full-Stack']  },
  { id: 3, title: 'VidShare',img:'vidShare.png', categories: ['ReactJs','Full-Stack'] },
  { id: 3, title: 'Portfolio',img:'portfolioimg.png', categories: ['ReactJs']},

];

const icons = [
  { id: 1, icon:<TbWorldWww/>,color:'#7dc5f5'},
  { id: 2, icon:<IoLogoGithub/>,color:'black'},
  { id: 3, icon:<FaMarkdown/>,color:'#767674'},

];

const Portfolio = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(selectedCategory));

  const allCategories = [...new Set(projects.flatMap((project) => project.categories))];

  return (
    <Box sx={{ flexGrow: 1}}>
              <Box sx={{textAlign:'center',pb:7}}>
                <Typography component="div" variant="h4" sx={{letterSpacing:'.2rem',fontFamily:'Poppins',fontWeight:{xs:'400',sm:'400',md:'600'}}}>
                  Portfolio
                </Typography>
                <Typography variant="subtitle2" color="text.secondary"  component="div" sx={{fontFamily:'Poppins'}}>
                  My recent work
                </Typography>
              </Box>
              <Box sx={{flexGrow:1,display:'flex',justifyContent:'center',pb:10}}>
                <ButtonGroup>
                  <Button onClick={() => handleFilter('All')}>All</Button>
                  {allCategories.map((category) => (
                    <Button key={category} onClick={() => handleFilter(category)}>
                      {category}
                    </Button>
                  ))}
                </ButtonGroup>
              </Box>
              <Box sx={{height:'auto',flexGrow:1,width:'100vw',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',alignItems:'center',p:10,gap:'5px' }}>
                {filteredProjects.map((project, index) => (
                  <Box sx={{maxWidth:"400px"}} key={index}>
                    <Card sx={{ width: 300 ,mb:{xs:9}}}>
                        <CardContent>
                          <>
                              <Typography gutterBottom variant="h6" component="div" sx={{letterSpacing:'.1rem',fontFamily:'Poppins'}}>
                                {project.title}
                              </Typography>
                             <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Box sx={{padding:"20px"}}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={`${project.img}`}
                                        sx={{width:'260px',height:'250px' }}
                                        variant="rounded"
                                    />
                                </Box>
                             </Grid>
                             <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                {icons.map((iconSymbol, index) => (
                                    <Grid item xs={4} key={index} >
                                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:20,color:iconSymbol.color,cursor:'pointer'}}>
                                        {iconSymbol.icon}
                                        </Box>
                                    </Grid>
                                ))}
                              </Grid>
                            </>
                        </CardContent>
                    </Card>
                  </Box> 
                  ))}
                </Box>
        </Box>
  )
}

export default Portfolio
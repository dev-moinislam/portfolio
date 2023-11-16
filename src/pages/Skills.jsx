import React from 'react'
import { Box, Card, CardActionArea, CardContent, Grid,Typography } from '@mui/material'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
/* ----------------------------- Frontend icons ----------------------------- */
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiBootstrapFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoRedux } from "react-icons/bi";
import { SiReactrouter } from "react-icons/si";
/* ------------------------------ Backend icons ----------------------------- */
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

/* ------------------------------- tools icon ------------------------------- */
import { PiTerminalFill } from "react-icons/pi";
import { TbBrandVscode } from "react-icons/tb";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiNpmjsFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiRender } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaChrome } from "react-icons/fa";







const frontend = [
  { label: 'Html',icon: <AiOutlineHtml5/>},
  { label: 'Css',icon: <FaCss3Alt/>},
  { label: 'Javascript',icon: <IoLogoJavascript/>},
  { label: 'Bootstrap',icon: <RiBootstrapFill/>},
  { label: 'Tailwind',icon: <SiTailwindcss/>},
  { label: 'React',icon: <SiReact/>},
  { label: 'MUI',icon: <SiMui/>},
  { label: 'Next.js',icon: <TbBrandNextjs/>},
  { label: 'Redux',icon: <BiLogoRedux/>},
  { label: 'React Router',icon: <SiReactrouter/>},


]

const backend = [
  { label: 'Node.js',icon: <FaNode/>},
  { label: 'Express.js',icon: <SiExpress/>},
  { label: 'MongoDb',icon: <SiMongodb/>},
  { label: 'Mongoose',icon: <SiMongoose/>},
  { label: 'MySql',icon: <GrMysql/>},

]

const tools = [
  { label: 'Terminal',icon: <PiTerminalFill/>},
  { label: 'Vs Code',icon: <TbBrandVscode/>},
  { label: 'Git',icon: <FaGit/>},
  { label: 'Github',icon: <FaGithub/>},
  { label: 'NPM',icon: <RiNpmjsFill/>},
  { label: 'Postman',icon: <SiPostman/>},
  { label: 'Chrome DevTools',icon: <FaChrome/>},
  { label: 'Figma',icon: <IoLogoFigma/>},
  { label: 'Render',icon: <SiRender/>},
  { label: 'Vercel',icon: <IoLogoVercel/>},

]

const Skills = () => {

  return (
        <Box sx={{ flexGrow: 1}}>
              <Box sx={{textAlign:'center',pb:7}}>
                <Typography component="div" variant="h4" sx={{letterSpacing:'.2rem',fontFamily:'Poppins',fontWeight:{xs:'400',sm:'400',md:'600'}}}>
                  Skills
                </Typography>
                <Typography variant="subtitle2" color="text.secondary"  component="div" sx={{fontFamily:'Poppins'}}>
                  My Technical Level
                </Typography>
              </Box>
                <Box sx={{height:{xs:'100%',md:'100vh'},width:'100vw',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',alignItems:'center',pb:20,gap:'1px' }}>
                  <Box sx={{maxWidth:"400px"}}>
                    <Card sx={{ width: 350 ,mb:{xs:9},height:'173px'}}>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Frontend
                          </Typography>

                          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {frontend.map((page, index) => (
                                <Grid item xs={6} key={index} >
                                    <Box sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:1}}>
                                      {page.icon}
                                      <Typography variant="body2" color="text.secondary">
                                          {page.label}
                                      </Typography>
                                    </Box>
                                </Grid>
                            ))}
                          </Grid>
                          
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                  <Box sx={{maxWidth:"400px"}}>
                    <Card sx={{ width: 350 ,mb:{xs:9},height:'173px'}}>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Backend
                          </Typography>
                          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {backend.map((page, index) => (
                                <Grid item xs={12} key={index} >
                                    <Box sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:1}}>
                                      {page.icon}
                                      <Typography variant="body2" color="text.secondary">
                                          {page.label}
                                      </Typography>
                                    </Box>
                                </Grid>
                            ))}
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                  <Box sx={{maxWidth:"400px"}}>
                    <Card sx={{ width: 350 ,mb:{xs:9},height:'173px'}}>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Tools
                          </Typography>
                          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {tools.map((page, index) => (
                                <Grid item xs={6} key={index} >
                                    <Box sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:1}}>
                                      {page.icon}
                                      <Typography variant="body2" color="text.secondary">
                                          {page.label}
                                      </Typography>
                                    </Box>
                                </Grid>
                            ))}
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>            
                </Box>
        </Box>
  )
}

export default Skills
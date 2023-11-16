import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';



const education = [
    {
      label: 'BSC in Geography & Environment',
      description: `Islamic University,Bangladesh`,
    },
    {
      label: 'Programming Languages:',
      description:'Proficient in HTML, CSS, JavaScript',
    },
    {
      label: 'Frontend Development:',
      description: `Strong knowledge of React.js and Next.js`,
    },
    {
      label: 'Backend Development:',
      description: `Familiarity with Node.js & Express.js framework`,
    },
  ];

  const experience = [
    {
      label: 'Web Services:',
      description: `RESTful API development and integration`,
    },
    {
      label: 'Problem Solving:',
      description:'Proven ability to troubleshoot and solve complex technical issues efficiently.',
    },
    {
      label: 'Multitasking:',
      description: `Successfully managed multiple projects simultaneously, meeting deadlines and maintaining high-quality standards.`,
    },
    {
      label: 'Creative UI Design',
      description: `Ability to design visually appealing and innovative user interfaces`,
    },
  ];

const Qualification = () => {


  return (
    <>
     <Box sx={{ textAlign: 'center',mt:7,fontFamily: 'Poppins' }}>
          <Typography component="div" variant="h4" sx={{ letterSpacing: '.2rem', fontFamily: 'Poppins', fontWeight: { xs: '400', sm: '400', md: '600' } }}>
              Qualification
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div" sx={{ fontFamily: 'Poppins' }}>
              My Personal Journey
          </Typography>
      </Box>
      <Typography component="div" variant="p" sx={{textAlign:'center',mt:10, letterSpacing: '.2rem', fontFamily: 'Poppins', fontWeight: { xs: '400', sm: '400', md: '600' } }}>
        Education & Experience
      </Typography>
      <Box sx={{ width: '100vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', mt: 2, gap: '20px' }}>
        <Box sx={{ maxWidth: 1000,pb:15,mt:7,display:'flex',gap:7,flexWrap: 'wrap',justifyContent:{xs:'center'} }}>
{/* /* --------------------------- Education stepper --------------------------- */ }
            <Stepper orientation="vertical" activeStep={-1}>
                {education.map((step, index) => (
                <Step key={step.label}>
                    <StepLabel sx={{maxWidth:'350px'}}>
                        <Box sx={{color:'black',fontWeight:'bold'}}>
                            {step.label}
                        </Box>
                        <Box sx={{fontStyle:'italic'}}>
                            {step.description}
                        </Box>
                    </StepLabel>
                </Step>
                ))}
            </Stepper>
{/* /* --------------------------- Experience stepper --------------------------- */ }
            <Stepper orientation="vertical" activeStep={-1}>
                {experience.map((step, index) => (
                <Step key={step.label}>
                    <StepLabel sx={{maxWidth:'350px'}}>
                        <Box sx={{color:'black',fontWeight:'bold'}}>
                            {step.label}
                        </Box>
                        <Box sx={{fontStyle:'italic'}}>
                            {step.description}
                        </Box>
                    </StepLabel>
                </Step>
                ))}
            </Stepper>
        </Box> 
     </Box>
    </>
  )
}

export default Qualification
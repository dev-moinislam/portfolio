import React from 'react'
import { green, blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button } from '@mui/material';

export const Social = () => {
  return (
    <Stack direction="column" spacing={2} sx={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Button>
        <Avatar sx={{ bgcolor:'black' }}>
            <GitHubIcon />
        </Avatar>
      </Button>
      <Button>
        <Avatar sx={{ bgcolor: blue[700] }}>
            <LinkedInIcon />
        </Avatar>
      </Button>
      <Button>
        <Avatar sx={{ bgcolor: green[700] }}>
            <WhatsAppIcon />
        </Avatar>
      </Button>
    </Stack>
  )
}

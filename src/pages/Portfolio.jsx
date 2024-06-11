import React from 'react';
import { Avatar, Box, Button, ButtonGroup, Card, CardContent, Grid, Typography, Link } from '@mui/material';
import { useState } from 'react';
import { TbWorldWww } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";
import { FaMarkdown } from "react-icons/fa";

const projects = [
  { id: 1, title: 'URL Shortener', img: 'url.png', categories: ['ReactJs'], livelink: "https://shortify-link.vercel.app/", details: "https://github.com/dev-moinislam/URL-Shortener/blob/master/README.md", frontendGithubLink: "https://github.com/dev-moinislam/URL-Shortener.git", backendGithubLink: "" },
  { id: 2, title: 'Blood Bank', img: 'bloodBank.png', categories: ['NextJs', 'Full-Stack'], livelink: "https://fullstack-nextjs-blood-bank.vercel.app/", details: "https://github.com/dev-moinislam/fullstack-nextjs-blood-bank/blob/master/README.md", frontendGithubLink: "https://github.com/dev-moinislam/fullstack-nextjs-blood-bank.git", backendGithubLink: "" },
  { id: 3, title: 'VidShare', img: 'vidShare.png', categories: ['ReactJs', 'Full-Stack'], livelink: "https://vid-share.vercel.app/", details: "https://github.com/dev-moinislam/VideoShare/blob/master/README.md", frontendGithubLink: "https://github.com/dev-moinislam/VideoShare.git", backendGithubLink: "" },
  { id: 4, title: 'WishperWave - Chat App', img: 'wishperWave.png', categories: ['Full-Stack'], livelink: "https://wishper-wave.vercel.app/", details: "https://github.com/dev-moinislam/wishper-wave-frontend/blob/master/README.md", frontendGithubLink: "https://github.com/dev-moinislam/wishper-wave-frontend.git", backendGithubLink: "https://github.com/dev-moinislam/wishper-wave-backend.git" },
  { id: 5, title: 'Portfolio', img: 'portfolioimg.png', categories: ['ReactJs'], livelink: "https://dev-moin.vercel.app/", details: "https://github.com/dev-moinislam/portfolio/blob/master/README.md", frontendGithubLink: "https://github.com/dev-moinislam/portfolio.git", backendGithubLink: "" },
];

const icons = [
  { id: 1, icon: <TbWorldWww />, color: '#7dc5f5', label: "Live", key: "livelink" },
  { id: 2, icon: <FaMarkdown />, color: '#767674', label: "Details", key: "details" },
  { id: 3, icon: <IoLogoGithub />, color: 'black', label: "Frontend", key: "frontendGithubLink" },
  { id: 4, icon: <IoLogoGithub />, color: 'black', label: "Backend", key: "backendGithubLink" },
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
    <Box id="portfolio" sx={{ flexGrow: 1, mt: 10 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography component="div" variant="h4" sx={{ letterSpacing: '.2rem', fontFamily: 'Poppins', fontWeight: { xs: '400', sm: '400', md: '600' } }}>
          Portfolio
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div" sx={{ fontFamily: 'Poppins' }}>
          My recent work
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', mb: 3 }}>
        <ButtonGroup sx={{ px: 1 }}>
          <Button
            sx={{
              fontSize: '12px',
              color: selectedCategory === 'All' ? 'white' : 'black',
              borderColor: 'black',
              backgroundColor: selectedCategory === 'All' ? 'black' : 'white',
              '&:hover': {
                backgroundColor: selectedCategory === 'All' ? 'black' : 'grey.300',
              }
            }}
            onClick={() => handleFilter('All')}
          >
            All
          </Button>
          {allCategories.map((category) => (
            <Button
              key={category}
              sx={{
                fontSize: '12px',
                color: selectedCategory === category ? 'white' : 'black',
                borderColor: 'black',
                backgroundColor: selectedCategory === category ? 'black' : 'white',
                '&:hover': {
                  backgroundColor: selectedCategory === category ? 'black' : 'grey.300',
                }
              }}
              onClick={() => handleFilter(category)}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <Box sx={{ height: 'auto', flexGrow: 1, width: '100vw', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', p: 3, gap: '20px' }}>
        {filteredProjects.map((project) => (
          <Card sx={{ width: { xs: '90%', sm: '70%', md: '45%', lg: '30%' }, mb: 5 }} key={project.id}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{ letterSpacing: '.1rem', fontFamily: 'Poppins', textAlign: 'center' }}>
                {project.title}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Avatar
                  alt={project.title}
                  src={`${project.img}`}
                  sx={{ width: '100%', height: 'auto', maxWidth: '300px', borderRadius: 2 }}
                  variant="rounded"
                />
              </Box>
              <Grid container spacing={2}>
                {icons.map((iconSymbol) => (
                  project[iconSymbol.key] && (
                    <Grid item xs={6} key={iconSymbol.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Box component={Link} href={project[iconSymbol.key]} target='_blank' sx={{ fontSize: 20, color: iconSymbol.color, cursor: 'pointer', display: 'flex', gap: 1, px: 4 }}>
                        {iconSymbol.icon} <span style={{ fontSize: 13 }}>{iconSymbol.label}</span>
                      </Box>
                    </Grid>
                  )
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;

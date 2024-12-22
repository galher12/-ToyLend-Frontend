import React from 'react';
import { 
  Box, Container, Typography, Button, Grid, Paper,
  Stack
} from '@mui/material';
import { Park as Eco, Star, CardGiftcard } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Navbar />
      <Box sx={{ bgcolor: '#faf7ff' }}>
        {/* Hero Section */}
        <Box
          sx={{
            pt: 15,
            pb: 10,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, #f5f7ff 0%, #f0f2ff 100%)',
              zIndex: 0,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '-50%',
              right: '-20%',
              width: '80%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(107, 102, 255, 0.1) 0%, rgba(153, 153, 255, 0.05) 50%, transparent 70%)',
              borderRadius: '50%',
              transform: 'rotate(-12deg)',
              zIndex: 1,
            }
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Typography
              variant="h1"
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 3,
                background: 'linear-gradient(45deg, #6B66FF 30%, #9999FF 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center'
              }}
            >
              Endless Play, Less Clutter!
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 6,
                color: '#666',
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Join ToyLend and let the fun begin! New toys every month, without the mess.
            </Typography>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center"
              alignItems="center"
            >
              <Button 
                component={Link}
                to="/start-adventure"
                variant="contained"
                size="large"
                sx={{ 
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #6B66FF 30%, #9999FF 90%)',
                  boxShadow: '0 3px 15px rgba(107, 102, 255, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 5px 20px rgba(107, 102, 255, 0.4)',
                  }
                }}
              >
                Start Your Adventure
              </Button>
              <Button
                onClick={() => navigate('/explore')}
                variant="contained"
                size="large"
                sx={{ 
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #E6E6FF 30%, #F0F0FF 90%)',
                  color: '#6B66FF',
                  boxShadow: '0 3px 15px rgba(153, 153, 255, 0.2)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 5px 20px rgba(153, 153, 255, 0.3)',
                  }
                }}
              >
                Explore Our Toys
              </Button>
            </Stack>
          </Container>
        </Box>

        {/* Why Parents Love ToyLend Section */}
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Typography
            variant="h2"
            sx={{ 
              mb: 6,
              textAlign: 'center',
              color: '#9C27B0',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700
            }}
          >
            Why Parents Love ToyLend
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <Eco sx={{ fontSize: 40, color: '#4CAF50' }} />,
                title: 'Eco-Friendly',
                description: 'Sustainable play that helps our planet'
              },
              {
                icon: <Star sx={{ fontSize: 40, color: '#FFC107' }} />,
                title: 'Monthly Surprises',
                description: 'New exciting toys delivered to your door'
              },
              {
                icon: <CardGiftcard sx={{ fontSize: 40, color: '#FF6B6B' }} />,
                title: 'Tailored Selection',
                description: 'Age-appropriate toys for your child'
              }
            ].map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  {benefit.icon}
                  <Typography 
                    variant="h5" 
                    sx={{ my: 2, fontWeight: 700, color: '#333' }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography sx={{ color: '#666' }}>
                    {benefit.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Adventure Steps Section */}
        <Box sx={{ bgcolor: '#fff', py: 10 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              sx={{ 
                mb: 8,
                textAlign: 'center',
                color: '#333',
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700
              }}
            >
              Your ToyLend Adventure
            </Typography>
            <Box sx={{ position: 'relative' }}>
              {/* Gradient Connecting Line */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  top: '30px',
                  left: '50px',
                  right: '50px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #6B66FF 0%, #9999FF 50%, #6B66FF 100%)',
                  opacity: 0.5,
                  zIndex: 0,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-1px',
                    left: 0,
                    right: 0,
                    height: '5px',
                    background: 'inherit',
                    filter: 'blur(4px)',
                  }
                }}
              />
              <Grid container spacing={4} sx={{ position: 'relative' }}>
                {[
                  { step: 1, title: 'Sign Up', description: 'Create your account' },
                  { step: 2, title: 'Customize', description: 'Select your preferences' },
                  { step: 3, title: 'Receive', description: 'Get your first toy box' },
                  { step: 4, title: 'Play & Return', description: 'Enjoy and swap' }
                ].map((step, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: { xs: 'none', md: 'translateY(-10px)' },
                          '& .step-circle': {
                            transform: 'scale(1.1)',
                            boxShadow: '0 6px 15px rgba(107, 102, 255, 0.3)',
                          }
                        }
                      }}
                    >
                      <Box
                        className="step-circle"
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          background: `linear-gradient(45deg, #6B66FF ${index * 25}%, #9999FF ${100 - index * 25}%)`,
                          color: 'white',
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          boxShadow: '0 4px 10px rgba(107, 102, 255, 0.2)',
                          position: 'relative',
                          zIndex: 2
                        }}
                      >
                        {step.step}
                      </Box>
                      <Box
                        sx={{
                          p: 3,
                          borderRadius: 2,
                          bgcolor: 'white',
                          width: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: '0 8px 25px rgba(107, 102, 255, 0.15)',
                            bgcolor: 'rgba(107, 102, 255, 0.02)',
                          }
                        }}
                      >
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            mb: 1, 
                            fontWeight: 600,
                            color: '#6B66FF'
                          }}
                        >
                          {step.title}
                        </Typography>
                        <Typography sx={{ color: '#666' }}>
                          {step.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => navigate('/start-adventure')}
      >
        Start Adventure
      </Button>
    </Box>
  );
};

export default HomePage;
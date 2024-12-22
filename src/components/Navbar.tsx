import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navItems = ['How it Works', 'Pricing', 'About Us'];

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none',
              color: 'inherit',
              flexGrow: 1
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(45deg, #6B66FF 30%, #9999FF 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ToyLend
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/"
              sx={{ color: '#666', mx: 2 }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/subscribe"
              sx={{ color: '#666', mx: 2 }}
            >
              Subscribe
            </Button>
            {navItems.map((item) => (
              <Button 
                key={item}
                sx={{ 
                  color: '#666',
                  mx: 1,
                  '&:hover': {
                    color: '#6B66FF',
                    background: 'transparent'
                  }
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 
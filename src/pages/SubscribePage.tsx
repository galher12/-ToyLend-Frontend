import { Container, Typography, Box, Grid, Card, CardContent, Button, Radio, FormControlLabel, TextField } from '@mui/material';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function SubscribePage() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isNewUser, setIsNewUser] = useState(true);

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly Plan',
      price: '$29.99',
      period: 'per month',
      features: ['Access to all toys', 'Monthly toy rotation', 'Cancel anytime'],
    },
    {
      id: 'annual',
      name: 'Annual Plan',
      price: '$299.99',
      period: 'per year',
      features: ['Access to all toys', 'Monthly toy rotation', '2 months free', 'Priority support'],
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f8f9ff', minHeight: '100vh' }}>
      <Navbar />
      
      <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 700,
            color: '#6B66FF',
            mb: 3,
            textAlign: 'center',
          }}
        >
          Subscribe
        </Typography>
        
        {/* Subscription Plans */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {plans.map((plan) => (
            <Grid item xs={12} md={6} key={plan.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: selectedPlan === plan.id ? '2px solid #6B66FF' : '1px solid #e0e0e0',
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <FormControlLabel
                    value={plan.id}
                    control={
                      <Radio
                        checked={selectedPlan === plan.id}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                        sx={{ '&.Mui-checked': { color: '#6B66FF' } }}
                      />
                    }
                    label={
                      <Box>
                        <Typography variant="h5" component="div" fontWeight={600}>
                          {plan.name}
                        </Typography>
                        <Typography variant="h4" color="#6B66FF" fontWeight={700} my={2}>
                          {plan.price}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" mb={2}>
                          {plan.period}
                        </Typography>
                        {plan.features.map((feature, index) => (
                          <Typography key={index} sx={{ mb: 1 }}>
                            • {feature}
                          </Typography>
                        ))}
                      </Box>
                    }
                    sx={{ width: '100%', m: 0 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Account Form */}
        {isNewUser && (
          <Box component="form" sx={{ maxWidth: 600, mx: 'auto', mb: 6 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Create Account
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>
        )}

        {/* Payment Form */}
        <Box component="form" sx={{ maxWidth: 600, mx: 'auto' }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Payment Details
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Card Holder Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                placeholder="1234 5678 9012 3456"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Expiry Date"
                variant="outlined"
                placeholder="MM/YY"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CVV"
                variant="outlined"
                placeholder="123"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#6B66FF',
                  '&:hover': { bgcolor: '#5855DB' },
                  mt: 2,
                  py: 1.5,
                }}
              >
                Subscribe Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
} 
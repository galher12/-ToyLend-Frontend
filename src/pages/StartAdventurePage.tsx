import { 
  Container, 
  Typography, 
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  SelectChangeEvent
} from '@mui/material';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

interface User {
  id: number;
  name: string;
}

export default function StartAdventurePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isReturning, setIsReturning] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/api/users', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const checkSubscriptionStatus = async (userId: number) => {
    try {
      const response = await fetch(`http://localhost:8000/api/subscriptions/status/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to check subscription status');
      }
      const data = await response.json();
      setIsSubscribed(data.is_subscribed);
    } catch (error) {
      console.error('Error checking subscription status:', error);
      throw error;
    }
  };

  const handleUserSelect = async (event: SelectChangeEvent<string>) => {
    const userId = event.target.value;
    setSelectedUser(userId);
    if (userId) {
      try {
        await checkSubscriptionStatus(Number(userId));
      } catch (error) {
        console.error('Error checking subscription status:', error);
      }
    }
  };

  const handleSubscribe = async () => {
    if (!selectedUser) return;

    setIsSubscribing(true);
    try {
      const response = await fetch(`http://localhost:8000/api/subscriptions/subscribe/${Number(selectedUser)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Failed to subscribe');
      }

      const result = await response.json();
      setIsSubscribed(true);
      alert(result.message);
    } catch (error) {
      console.error('Subscription error:', error);
      alert(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleReturn = async () => {
    if (!selectedUser) return;

    setIsReturning(true);
    try {
      const response = await fetch(`http://localhost:8000/api/returns/return/${Number(selectedUser)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Failed to return toys');
      }

      const result = await response.json();
      setIsSubscribed(false);
      alert(result.message);
    } catch (error) {
      console.error('Return error:', error);
      alert(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsReturning(false);
    }
  };

  return (
    <Box sx={{ bgcolor: '#f8f9ff', minHeight: '100vh' }}>
      <Navbar />
      
      <Container maxWidth="sm" sx={{ pt: 12, pb: 8, textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 700,
            color: '#6B66FF',
            mb: 3,
          }}
        >
          Start Your Adventure
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#666',
            mb: 6,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1.2rem', md: '1.5rem' },
          }}
        >
          Choose your profile to begin exploring our toy collection
        </Typography>

        <FormControl fullWidth sx={{ mt: 4 }}>
          <InputLabel id="user-select-label">Select User</InputLabel>
          <Select
            labelId="user-select-label"
            id="user-select"
            value={selectedUser}
            label="Select User"
            disabled={loading}
            onChange={handleUserSelect}
          >
            <MenuItem value="">
              <em>Select a user</em>
            </MenuItem>
            {loading ? (
              <MenuItem disabled>Loading users...</MenuItem>
            ) : (
              users.map((user) => (
                <MenuItem key={user.id} value={String(user.id)}>
                  {user.name}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>

        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={3}
          sx={{ 
            mt: 6,
            justifyContent: 'center',
            gap: '24px'
          }}
        >
          <Button
            variant="contained"
            onClick={handleSubscribe}
            disabled={!selectedUser || isSubscribing || isSubscribed}
            sx={{
              bgcolor: '#6B66FF',
              color: 'white',
              px: 6,
              py: 1.5,
              borderRadius: '50px',
              fontSize: '1.1rem',
              textTransform: 'none',
              minWidth: '180px',
              '&:hover': {
                bgcolor: '#5651FF'
              }
            }}
          >
            {isSubscribing ? 'Subscribing...' : 'Subscribe'}
          </Button>

          <Button
            variant="contained"
            onClick={handleReturn}
            disabled={!selectedUser || isReturning || !isSubscribed}
            sx={{
              bgcolor: '#FF6B6B',
              color: 'white',
              px: 6,
              py: 1.5,
              borderRadius: '50px',
              fontSize: '1.1rem',
              textTransform: 'none',
              minWidth: '180px',
              '&:hover': {
                bgcolor: '#FF5252'
              },
              '&.Mui-disabled': {
                bgcolor: 'rgba(255, 107, 107, 0.5)',
                color: 'white'
              }
            }}
          >
            {isReturning ? 'Returning...' : 'Return Toys'}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
} 
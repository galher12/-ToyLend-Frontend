import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from '@mui/material';
import Navbar from '../components/Navbar';

// Types
interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  exampleToys: string[];
}

const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Developmental Toys",
    description: "Educational toys that support cognitive, motor, and social development",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80",
    exampleToys: ["Building Blocks", "Shape Sorters", "Learning Tablets"]
  },
  {
    id: 2,
    name: "Creative Play",
    description: "Unleash imagination with art supplies and creative tools",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80",
    exampleToys: ["Art Sets", "Play-Doh", "Craft Kits"]
  },
  {
    id: 3,
    name: "Role Play and Imagination",
    description: "Dress-up and pretend play items for imaginative adventures",
    image: "https://images.unsplash.com/photo-1555448248-2571daf6344b?auto=format&fit=crop&q=80",
    exampleToys: ["Costumes", "Kitchen Sets", "Doctor Kits"]
  },
  {
    id: 4,
    name: "Board Games and Puzzles",
    description: "Family-friendly games and challenging puzzles for all ages",
    image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?auto=format&fit=crop&q=80",
    exampleToys: ["Strategy Games", "Jigsaw Puzzles", "Card Games"]
  },
  {
    id: 5,
    name: "Outdoor and Active Play",
    description: "Equipment for physical activity and outdoor adventures",
    image: "https://images.unsplash.com/photo-1472745433479-4556f22e32c2?auto=format&fit=crop&q=80",
    exampleToys: ["Sports Equipment", "Ride-ons", "Sand Toys"]
  },
  {
    id: 6,
    name: "Classic and Timeless Toys",
    description: "Beloved traditional toys that never go out of style",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&q=80",
    exampleToys: ["Wooden Toys", "Dolls", "Train Sets"]
  },
  {
    id: 7,
    name: "Interactive and Tech Toys",
    description: "Modern toys that combine learning with technology",
    image: "https://images.unsplash.com/photo-1531746790731-6bf607ccff6f?auto=format&fit=crop&q=80",
    exampleToys: ["Robots", "Coding Kits", "Electronic Games"]
  },
  {
    id: 8,
    name: "Toddler and Baby Toys",
    description: "Safe and engaging toys for our youngest explorers",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80",
    exampleToys: ["Rattles", "Stacking Toys", "Soft Books"]
  },
  {
    id: 9,
    name: "Seasonal and Holiday Toys",
    description: "Special toys for holidays and seasonal activities",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80",
    exampleToys: ["Beach Toys", "Holiday Crafts", "Snow Toys"]
  },
  {
    id: 10,
    name: "Eco-Friendly and Sustainable",
    description: "Environmental-conscious toys made from sustainable materials",
    image: "https://images.unsplash.com/photo-1567225477277-c8162eb4c922?auto=format&fit=crop&q=80",
    exampleToys: ["Bamboo Toys", "Recycled Materials", "Natural Games"]
  },
  {
    id: 11,
    name: "Social and Group Play",
    description: "Toys designed for interactive play and social development",
    image: "https://images.unsplash.com/photo-1536337005238-94b997371b40?auto=format&fit=crop&q=80",
    exampleToys: ["Team Games", "Party Games", "Cooperative Play"]
  },
  {
    id: 12,
    name: "Puzzle and Brain Teasers",
    description: "Challenge your mind with logic puzzles and brain games",
    image: "https://images.unsplash.com/photo-1606503153255-59d5e417e406?auto=format&fit=crop&q=80",
    exampleToys: ["Logic Puzzles", "Brain Teasers", "Math Games"]
  }
];

const ExplorePage: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#f8f9ff', minHeight: '100vh' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ pt: 12, pb: 8, textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 700,
            color: '#6B66FF',
            mb: 3,
          }}
        >
          Explore Our Collection
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
          Discover a world of toys carefully curated for learning and endless fun
        </Typography>
      </Container>

      {/* Categories Grid */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Grid container spacing={4}>
          {CATEGORIES.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '24px',
                  border: '1px solid rgba(107, 102, 255, 0.1)',
                  boxShadow: '0 4px 20px rgba(107, 102, 255, 0.05)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 30px rgba(107, 102, 255, 0.1)',
                    cursor: 'pointer'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={category.image}
                  alt={category.name}
                  sx={{ 
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700,
                      color: '#2D3748',
                      mb: 2
                    }}
                  >
                    {category.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#718096',
                      mb: 3,
                      lineHeight: 1.6
                    }}
                  >
                    {category.description}
                  </Typography>
                  <Box>
                    {category.exampleToys.map((toy) => (
                      <Chip
                        key={toy}
                        label={toy}
                        size="small"
                        sx={{
                          mr: 1,
                          mb: 1,
                          bgcolor: 'rgba(107, 102, 255, 0.1)',
                          color: '#6B66FF',
                          border: 'none',
                          borderRadius: '12px',
                          '&:hover': {
                            bgcolor: 'rgba(107, 102, 255, 0.2)',
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExplorePage; 
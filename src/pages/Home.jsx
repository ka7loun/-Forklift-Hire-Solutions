import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';

const features = [
  {
    icon: SecurityIcon,
    title: 'Professional Training',
    description: 'Certified training programs for forklift operators, from novice to advanced levels.',
  },
  {
    icon: SupportAgentIcon,
    title: 'Operator Provision',
    description: 'Skilled and certified forklift operators available for hire with our equipment.',
  },
  {
    icon: LocalShippingIcon,
    title: 'Logistics Support',
    description: 'Comprehensive goods transportation and material handling solutions nationwide.',
  },
  {
    icon: PaymentsIcon,
    title: 'Flexible Solutions',
    description: 'Customizable short-term and long-term contracts to match your requirements.',
  },
];

const equipment = [
  {
    title: 'Warehouse Forklift',
    image: '/images/warehouse-forklift.svg',
    description: 'Perfect for indoor warehouse operations with load capacities up to 5,000 lbs.',
  },
  {
    title: 'Rough Terrain Forklift',
    image: '/images/rough-terrain-forklift.svg',
    description: 'Ideal for outdoor construction sites and uneven surfaces.',
  },
  {
    title: 'Electric Forklift',
    image: '/images/electric-forklift.svg',
    description: 'Eco-friendly option for indoor operations with zero emissions.',
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 3,
            }}
          >
            Forklift Hire Solutions Ltd
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              mb: 4,
              fontWeight: 'normal',
            }}
          >
            Your Trusted Partner in Comprehensive Forklift Services Across the UK
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/booking')}
            sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
          >
            Book Now
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            onClick={() => navigate('/equipment')}
          >
            View Equipment
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Box sx={{ textAlign: 'center' }}>
                <feature.icon
                  sx={{ fontSize: 48, color: 'primary.main', mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Equipment Showcase */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 6 }}>
            Featured Equipment
          </Typography>
          <Grid container spacing={4}>
            {equipment.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.title}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: 'contain', p: 2 }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/equipment')}
            >
              View All Equipment
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Contact us today to discuss your forklift rental needs
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
import React from 'react';
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tabs,
  Tab,
  Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categories = ['All', 'Warehouse', 'Outdoor', 'Electric', 'Specialty'];

const equipment = [
  {
    id: 1,
    name: 'Standard Warehouse Forklift',
    category: 'Warehouse',
    image: '/images/warehouse-forklift.svg',
    capacity: '5,000 lbs',
    features: ['Indoor Use', 'Cushion Tires', 'LPG Powered'],
    description: 'Ideal for general warehouse operations with excellent maneuverability.',
    specifications: [
      'Lift Height: 188"',
      'Fork Length: 42"',
      'Overall Width: 42"',
      'Power Type: LPG',
    ],
  },
  {
    id: 2,
    name: 'Heavy-Duty Rough Terrain',
    category: 'Outdoor',
    image: '/images/rough-terrain-forklift.svg',
    capacity: '8,000 lbs',
    features: ['All-Terrain', 'Diesel Powered', 'Pneumatic Tires'],
    description: 'Perfect for construction sites and outdoor applications.',
    specifications: [
      'Lift Height: 192"',
      'Fork Length: 48"',
      'Overall Width: 72"',
      'Power Type: Diesel',
    ],
  },
  {
    id: 3,
    name: 'Electric Reach Truck',
    category: 'Electric',
    image: '/images/electric-forklift.svg',
    capacity: '4,500 lbs',
    features: ['Zero Emissions', 'Narrow Aisle', 'Extended Reach'],
    description: 'Specialized for narrow aisle operations with extended reach capabilities.',
    specifications: [
      'Lift Height: 240"',
      'Fork Length: 42"',
      'Overall Width: 40"',
      'Power Type: Electric',
    ],
  },
  {
    id: 4,
    name: 'Telehandler',
    category: 'Specialty',
    image: '/images/telehandler.svg',
    capacity: '10,000 lbs',
    features: ['Variable Reach', 'All-Terrain', 'Multi-Purpose'],
    description: 'Versatile equipment for construction and material handling at height.',
    specifications: [
      'Max Reach: 42\'',
      'Lift Height: 44\'',
      'Overall Width: 96"',
      'Power Type: Diesel',
    ],
  },
  {
    id: 5,
    name: 'Walkie Stacker',
    category: 'Electric',
    image: '/images/walkie-stacker.svg',
    capacity: '2,000 lbs',
    features: ['Compact', 'Electric Powered', 'Walk Behind'],
    description: 'Compact solution for light-duty material handling in tight spaces.',
    specifications: [
      'Lift Height: 150"',
      'Fork Length: 42"',
      'Overall Width: 35"',
      'Power Type: Electric',
    ],
  },
];

function Equipment() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const filteredEquipment = equipment.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Our Equipment Fleet
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          We offer a comprehensive range of forklift services including equipment hire, certified operators, and professional training programs
        </Typography>

        {/* Category Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="equipment categories"
          >
            {categories.map((category) => (
              <Tab
                key={category}
                label={category}
                value={category}
                sx={{ textTransform: 'none' }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Equipment Grid */}
        <Grid container spacing={4}>
          {filteredEquipment.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <Card 
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={item.image}
                  alt={item.name}
                  sx={{
                    objectFit: 'contain',
                    p: 2,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {item.name}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {item.features.map((feature) => (
                      <Chip
                        key={feature}
                        label={feature}
                        size="small"
                        sx={{
                          mr: 1,
                          mb: 1,
                          bgcolor: 'primary.light',
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'primary.main',
                          },
                        }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                  >
                    Capacity: {item.capacity}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {item.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Specifications:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {item.specifications.map((spec) => (
                      <Typography
                        key={spec}
                        component="li"
                        variant="body2"
                        color="text.secondary"
                      >
                        {spec}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Ready to Enhance Your Operations?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/booking')}
            sx={{
              mr: 2,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            Book Now
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Equipment;
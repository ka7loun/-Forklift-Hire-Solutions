import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  Paper,
} from '@mui/material';

const forkliftInventory = [
  {
    id: 1,
    title: 'New Electric Forklift',
    image: '/images/electric-forklift.svg',
    price: '$32,999',
    specs: {
      capacity: '5,000 lbs',
      height: '188 inches',
      type: 'Electric',
      condition: 'New',
    },
    description: 'Brand new electric forklift with advanced features and zero emissions. Perfect for indoor warehouse operations.',
  },
  {
    id: 2,
    title: 'Used Warehouse Forklift',
    image: '/images/warehouse-forklift.svg',
    price: '$18,500',
    specs: {
      capacity: '4,500 lbs',
      height: '180 inches',
      type: 'LPG',
      condition: 'Used',
    },
    description: 'Well-maintained warehouse forklift with low hours. Ideal for medium-duty applications.',
  },
  {
    id: 3,
    title: 'Heavy-Duty Rough Terrain',
    image: '/images/rough-terrain-forklift.svg',
    price: '$45,999',
    specs: {
      capacity: '8,000 lbs',
      height: '196 inches',
      type: 'Diesel',
      condition: 'New',
    },
    description: 'Powerful rough terrain forklift designed for outdoor use and challenging environments.',
  },
];

function BuyForklift() {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Typography variant="h2" align="center" gutterBottom>
          Forklifts for Sale
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Browse our selection of new and used forklifts
        </Typography>

        {/* Forklift Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {forkliftInventory.map((forklift) => (
            <Grid item xs={12} md={4} key={forklift.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={forklift.image}
                  alt={forklift.title}
                  sx={{ objectFit: 'contain', p: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {forklift.title}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {forklift.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {forklift.description}
                  </Typography>
                  <Grid container spacing={1}>
                    {Object.entries(forklift.specs).map(([key, value]) => (
                      <Grid item xs={6} key={key}>
                        <Typography variant="body2" color="text.secondary">
                          <strong>{key}:</strong> {value}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form */}
        <Paper sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
          <Typography variant="h4" gutterBottom align="center">
            Interested in Purchasing?
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Fill out the form below and our sales team will contact you shortly.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="First Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" variant="outlined" type="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Phone" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                placeholder="Tell us which forklift you're interested in and any questions you have."
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                Submit Inquiry
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default BuyForklift;
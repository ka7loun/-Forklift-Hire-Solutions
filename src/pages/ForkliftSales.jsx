import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Stack,
  Paper,
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';
import VerifiedIcon from '@mui/icons-material/Verified';
import PaymentIcon from '@mui/icons-material/Payment';
import FactoryIcon from '@mui/icons-material/Factory';

const ForkliftSales = () => {
  const offerings = [
    {
      title: 'Brand New Forklifts',
      description: 'Direct from trusted manufacturers',
      icon: <FactoryIcon fontSize="large" />,
    },
    {
      title: 'Approved Used Forklifts',
      description: 'Fully inspected, serviced, and certified',
      icon: <VerifiedIcon fontSize="large" />,
    },
    {
      title: 'JAC Forklifts – Available Now',
      description: 'Electric, diesel, and gas models – strong, dependable machines',
      icon: <BuildIcon fontSize="large" />,
    },
    {
      title: 'Flexible Purchase Options',
      description: 'Reserve, part exchange, or finance by request',
      icon: <PaymentIcon fontSize="large" />,
    },
    {
      title: 'Nationwide Delivery',
      description: 'We deliver across the UK with optional unloading services',
      icon: <LocalShippingIcon fontSize="large" />,
    },
  ];

  const forkliftListings = [
    {
      model: 'JAC CPCD30',
      fuelType: 'Diesel',
      capacity: '3,000kg',
      mastType: 'Triple stage',
      liftHeight: '4.5m',
      condition: 'Used – Fully Refurbished',
      price: '£12,995',
    },
    {
      model: 'JAC CPD25',
      fuelType: 'Electric',
      capacity: '2,500kg',
      mastType: 'Triple stage',
      liftHeight: '4.8m',
      condition: 'New',
      price: '£19,995',
    },
    {
      model: 'JAC CPQD35',
      fuelType: 'LPG',
      capacity: '3,500kg',
      mastType: 'Double stage',
      liftHeight: '4.0m',
      condition: 'Used – Excellent',
      price: '£14,995',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Quality Forklifts for Sale – New & Used
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Browse our range of reliable forklifts for immediate purchase. All machines are fully
            inspected and ready to work — including popular models from JAC Forklifts.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" color="secondary" size="large">
              View Available Stock
            </Button>
            <Button variant="outlined" color="inherit" size="large">
              Request a Callback
            </Button>
            <Button variant="outlined" color="inherit" size="large">
              Enquire Now
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* What We Offer */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          What We Offer
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {offerings.map((offering, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={2} sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>{offering.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {offering.title}
                </Typography>
                <Typography color="text.secondary">{offering.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Example Listings */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Available Forklifts
          </Typography>
          <Grid container spacing={4}>
            {forkliftListings.map((forklift, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {forklift.model}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      <strong>Fuel Type:</strong> {forklift.fuelType}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      <strong>Capacity:</strong> {forklift.capacity}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      <strong>Mast Type:</strong> {forklift.mastType}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      <strong>Lift Height:</strong> {forklift.liftHeight}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      <strong>Condition:</strong> {forklift.condition}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {forklift.price} + VAT
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" color="primary">
                        Enquire
                      </Button>
                      <Button variant="outlined" color="primary">
                        Reserve Now
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Need Help Choosing */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Need Help Choosing?
          </Typography>
          <Typography variant="body1" paragraph>
            Not sure which forklift is right for your site? Our team will help you choose based on
            your space, lifting height, fuel preference, and budget.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <Button variant="contained" color="primary">
              Book a Free Phone Consultation
            </Button>
            <Button variant="outlined" color="primary">
              Request a Callback
            </Button>
            <Button variant="outlined" color="primary">
              Ask About Part Exchange
            </Button>
          </Stack>
        </Paper>
      </Container>

      {/* Certification & Safety */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
            Certification & Safety
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              'All forklifts sold with inspection reports',
              'LOLER certification available on request',
              'Full safety checks completed before delivery',
              'Optional training for new drivers',
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                  <VerifiedIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                  <Typography>{item}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer CTA */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to purchase or need help deciding?
          </Typography>
          <Typography variant="body1" paragraph>
            Call us on 01582 967 987, email sales@forklifthiresolution.co.uk, or fill in our enquiry
            form to get started.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Contact Us Now
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default ForkliftSales;
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const benefits = [
  'Available 24/7, including night shift cover',
  'Nationwide delivery within hours',
  'Certified, fully serviced machines',
  'Diesel, electric, gas, and lithium options',
  'All sizes and lifting capacities',
  'Transparent pricing, no hidden fees',
];

const forkliftTypes = [
  {
    title: 'Electric Counterbalance Forklifts',
    image: './images/electric-forklift.svg',
    description: 'Zero-emission forklifts ideal for indoor operations',
  },
  {
    title: 'Diesel & Gas Forklifts',
    image: './images/warehouse-forklift.svg',
    description: 'Powerful machines for heavy-duty applications',
  },
  {
    title: 'Reach Trucks & Narrow Aisle Forklifts',
    image: './images/warehouse-forklift.svg',
    description: 'Specialized equipment for maximizing warehouse space',
  },
  {
    title: 'Telehandlers & Rough Terrain Forklifts',
    image: './images/rough-terrain-forklift.svg',
    description: 'Versatile machines for construction and outdoor use',
  },
  {
    title: 'Pallet Stackers & Warehouse Lifts',
    image: './images/electric-forklift.svg',
    description: 'Cost-effective solutions for light to medium duty tasks',
  },
];

const equipment = [
  {
    title: 'Warehouse Forklift',
    image: './images/warehouse-forklift.svg',
    description: 'Perfect for indoor warehouse operations with load capacities up to 5,000 lbs.',
    features: [
      'Ideal for indoor use',
      'Excellent maneuverability',
      'Electric and LPG options',
      'Various mast heights available',
    ],
  },
  {
    title: 'Rough Terrain Forklift',
    image: './images/rough-terrain-forklift.svg',
    description: 'Ideal for outdoor construction sites and uneven surfaces.',
    features: [
      'All-terrain capability',
      'High ground clearance',
      'Powerful diesel engine',
      'Weather-resistant design',
    ],
  },
  {
    title: 'Electric Forklift',
    image: './images/electric-forklift.svg',
    description: 'Eco-friendly option for indoor operations with zero emissions.',
    features: [
      'Zero emissions',
      'Low noise operation',
      'Reduced maintenance costs',
      'Extended battery life',
    ],
  },
];

function ForkliftHire() {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #FF6B00 0%, #002B5C 100%)',
          color: 'white',
          py: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("./images/warehouse-forklift.svg")',
            backgroundSize: 'cover',
            opacity: 0.1,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Flexible Forklift Hire – Short or Long Term, Nationwide
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: 800 }}>
            Hire forklifts quickly and reliably, whether for a single shift or a long-term contract. 
            We've got the right machine for the job — ready when you need it, with or without an operator.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Request a Quotation
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/booking')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Book a Forklift
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Call Us Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Why Choose Our Forklift Hire Services?
        </Typography>
        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <CheckCircleOutlineIcon
                  color="primary"
                  sx={{ fontSize: 30, mt: 0.5 }}
                />
                <Typography variant="h6">{benefit}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="h5"
          align="center"
          sx={{ mt: 6, fontStyle: 'italic', color: 'text.secondary' }}
        >
          We specialise in helping clients meet urgent, temporary, and short-term lifting needs without compromising on service.
        </Typography>
      </Container>

      {/* Forklift Types Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Forklift Types Available
          </Typography>
          <Grid container spacing={4}>
            {forkliftTypes.map((type, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: (theme) => `0 8px 24px ${theme.palette.primary.main}25`,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={type.image}
                    alt={type.title}
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
                      {type.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {type.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="h6"
            align="center"
            sx={{ mt: 4, color: 'text.secondary' }}
          >
            If you don't see the machine you need, just ask — we can source it fast.
          </Typography>
        </Container>
      </Box>

      {/* Equipment Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Available Equipment
          </Typography>
          <Grid container spacing={4}>
            {equipment.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
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
                    <Typography variant="h5" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {item.description}
                    </Typography>
                    <List dense>
                      {item.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex}>
                          <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Hire Options Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Hire Options
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Plant Only Hire',
              description: 'You operate it — we deliver the machine.',
            },
            {
              title: 'Operated Forklift Hire',
              description: 'Includes machine and a certified operator for the duration.',
            },
            {
              title: 'Emergency Same-Day Hire',
              description: 'Ideal for breakdowns or last-minute cover.',
            },
          ].map((option, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  {option.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {option.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Booking Process Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Simple 3-Step Hire
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                step: 1,
                title: 'Apply or Log In to your account',
                description: 'Quick and easy registration process',
              },
              {
                step: 2,
                title: 'Choose your forklift and hire period',
                description: 'Select from our wide range of equipment',
              },
              {
                step: 3,
                title: 'Confirm booking and delivery details',
                description: 'Fast confirmation and delivery arrangement',
              },
            ].map((step) => (
              <Grid item xs={12} md={4} key={step.step}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: (theme) => `0 8px 24px ${theme.palette.primary.main}25`,
                    },
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      position: 'absolute',
                      top: -20,
                      left: -10,
                      fontSize: '120px',
                      color: 'primary.main',
                      opacity: 0.1,
                      zIndex: 0,
                    }}
                  >
                    {step.step}
                  </Typography>
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {step.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 6 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
            >
              Apply for an Account
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
            >
              Enquire Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #002B5C 0%, #001F42 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Need help choosing the right forklift?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Call us on 01582 967 987 or click to chat. We'll match the best machine to your job in minutes.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 16px rgba(255,107,0,0.3)',
              },
            }}
          >
            Contact Us Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default ForkliftHire;
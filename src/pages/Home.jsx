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
    title: 'Same-Day Hire Available',
    description: 'Quick response for urgent requirements with flexible hire options.',
  },
  {
    icon: SupportAgentIcon,
    title: 'Certified & Insured Operators',
    description: 'Fully qualified and insured professionals for safe operations.',
  },
  {
    icon: LocalShippingIcon,
    title: 'UK-Based Professional Team',
    description: 'Friendly, experienced staff providing nationwide support 24/7.',
  },
  {
    icon: PaymentsIcon,
    title: 'Transparent Pricing',
    description: 'Clear, upfront costs with no hidden fees or surprises.',
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
          background: 'linear-gradient(135deg, #FF6B00 0%, #002B5C 100%)',
          color: 'white',
          py: { xs: 10, md: 14 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/images/warehouse-forklift.svg")',
            backgroundSize: 'cover',
            opacity: 0.1,
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              mb: 3,
              fontWeight: 900,
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            Your Trusted Partner for Forklift Hire, Operators & Lifting Solutions
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              mb: 2,
              fontWeight: 'normal',
            }}
          >
            Certified, Reliable, and Ready When You Are – Short or Long-Term Hire Available
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              mb: 4,
              fontWeight: 'normal',
              opacity: 0.9,
            }}
          >
            We provide fast, flexible forklift hire and lifting services across the UK — available 24/7 to meet daytime, night shift, and weekend demands.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/booking')}
            >
              Book a Service
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Apply for an Account
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Call Us Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Core Services Grid */}
      <Container id="services" maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            mb: 6,
            fontWeight: 700,
            color: 'primary.main',
          }}
        >
          Our Core Services
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              title: 'Forklift Hire',
              description: 'Flexible hire for short or long-term projects.',
              link: '/forklift-hire'
            },
            {
              title: 'Operated Plant Hire',
              description: 'Hire forklifts with fully certified operators.',
              link: '/equipment'
            },
            {
              title: 'Transport & Warehouse Removals',
              description: 'Safe movement of stock, pallets, and equipment.',
              link: '/transport-removals'
            },
            {
              title: 'Forklift Training & Certification',
              description: 'Training for new and experienced drivers with in-house certification.',
              link: '/contact'
            },
            {
              title: 'Event & Exhibition Lifting',
              description: 'Reliable lifting support for expos and live events.',
              link: '/contact'
            },
            {
              title: 'Temporary Staff Recruitment',
              description: 'Forklift drivers, transport drivers, warehouse operatives.',
              link: '/recruitment'
            },
            {
              title: 'Forklift Sales',
              description: 'Fully inspected machines ready to buy.',
              link: '/forklift-sales'
            },
            {
              title: 'Coming Soon',
              description: 'Watch this space for new services.',
              link: null
            }
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  cursor: service.link ? 'pointer' : 'default',
                  '&:hover': {
                    transform: service.link ? 'translateY(-8px)' : 'none'
                  }
                }}
                onClick={() => service.link && navigate(service.link)}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {service.description}
                  </Typography>
                  {service.link && (
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={() => navigate(service.link)}
                    >
                      Learn More
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 6,
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            How It Works
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                step: 1,
                title: 'Open an Account or Log In',
                description: 'Quick and easy registration process'
              },
              {
                step: 2,
                title: 'Select Your Service',
                description: 'Choose from our range of solutions'
              },
              {
                step: 3,
                title: 'Confirm & Book',
                description: 'Secure your booking instantly'
              }
            ].map((step) => (
              <Grid item xs={12} sm={4} key={step.step}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    position: 'relative'
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      color: 'primary.main',
                      opacity: 0.1,
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '8rem',
                      zIndex: 0
                    }}
                  >
                    {step.step}
                  </Typography>
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h5" gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            mb: 8,
            fontWeight: 700,
            color: 'primary.main',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 60,
              height: 4,
              bgcolor: 'secondary.main',
              borderRadius: 2
            }
          }}
        >
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Box 
                sx={{ 
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    '& .feature-icon': {
                      color: 'secondary.main',
                      transform: 'scale(1.1)'
                    }
                  }
                }}
              >
                <feature.icon
                  className="feature-icon"
                  sx={{ 
                    fontSize: 56, 
                    color: 'primary.main', 
                    mb: 3,
                    transition: 'all 0.3s ease-in-out'
                  }}
                />
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    color: 'primary.main'
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Equipment Showcase */}
      <Box sx={{ bgcolor: 'grey.50', py: 12 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 6,
              fontWeight: 700,
              color: 'primary.main',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                bgcolor: 'secondary.main',
                borderRadius: 2
              }
            }}
          >
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
                    border: '1px solid',
                    borderColor: 'grey.200',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                      borderColor: 'primary.main',
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
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #002B5C 0%, #001F42 100%)',
          color: 'white',
          py: 12,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/images/warehouse-forklift.svg")',
            backgroundSize: 'cover',
            opacity: 0.05,
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              mb: 3
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 5,
              maxWidth: '600px',
              mx: 'auto',
              opacity: 0.9
            }}
          >
            Contact us today to discuss your forklift rental needs
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
              fontWeight: 600,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 16px rgba(255,107,0,0.3)'
              }
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
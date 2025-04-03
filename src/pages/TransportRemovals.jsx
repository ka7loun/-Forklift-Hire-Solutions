import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const services = [
  {
    title: 'Warehouse Relocations',
    description: 'Full or partial removals of stock and racking.',
    icon: '/images/warehouse-forklift.svg',
  },
  {
    title: 'Pallet & Stock Transfers',
    description: 'Between sites, floors, or into temporary storage.',
    icon: '/images/electric-forklift.svg',
  },
  {
    title: 'Lifting & Loading Support',
    description: 'Forklifts and certified operators available.',
    icon: '/images/rough-terrain-forklift.svg',
  },
  {
    title: 'Breakdown or Emergency Support',
    description: 'Short-notice warehouse team or equipment.',
    icon: '/images/warehouse-forklift.svg',
  },
  {
    title: 'Temporary Storage & Handling',
    description: 'Support during site renovations or fit-outs.',
    icon: '/images/electric-forklift.svg',
  },
];

const siteVisitChecks = [
  'Volume and type of goods',
  'Access and lifting points',
  'Machinery and team requirements',
  'Estimated time to complete',
  'Safety and insurance needs',
];

const siteVisitProvisions = [
  'A clear, written quotation',
  'A full action plan and duration',
  'Optional phased or out-of-hours schedules',
];

const equipment = [
  'Forklifts (including JAC models)',
  'Pallet trucks and lifting equipment',
  'Certified forklift operators',
  'Transport vehicles (vans, flatbeds)',
  'Warehouse operatives and labourers',
  'Optional banksmen or spotters',
];

const coverage = [
  'Open 24/7 including weekends and night shifts',
  'Nationwide service (England, Wales, Scotland)',
  'Same-day site visits available for urgent removals',
  'Risk assessments available upon request',
  'Fully trained and insured staff',
];

function TransportRemovals() {
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
            background: 'url("/images/warehouse-forklift.svg")',
            backgroundSize: 'cover',
            opacity: 0.1,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Specialist Transport & Warehouse Removals – Nationwide, 24/7
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: 800 }}>
            We move your stock, machinery, and warehouse contents safely and efficiently — but every job starts with a site visit, quotation, and action plan tailored to your specific move.
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
              Request a Site Visit
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
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Send Your Details
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          What We Offer
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent>
                  <Box
                    component="img"
                    src={service.icon}
                    alt={service.title}
                    sx={{
                      height: 80,
                      width: 80,
                      mb: 2,
                      opacity: 0.8,
                    }}
                  />
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Site Visit Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              p: 4,
              bgcolor: 'background.paper',
              borderRadius: 2,
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ color: 'primary.main' }}>
              Important: Site Visit Required
            </Typography>
            <Typography variant="h6" paragraph>
              Every warehouse and transport job is unique.
              We must attend your site first to assess:
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <List>
                  {siteVisitChecks.map((check, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={check} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  After our visit, we will provide:
                </Typography>
                <List>
                  {siteVisitProvisions.map((provision, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary={provision} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
            <Typography
              variant="subtitle1"
              sx={{ mt: 2, fontStyle: 'italic', color: 'text.secondary' }}
            >
              No booking can proceed until after our assessment.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Equipment Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          What We Provide
        </Typography>
        <Grid container spacing={3}>
          {equipment.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 30 }} />
                <Typography variant="h6">{item}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Coverage Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Coverage & Availability
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {coverage.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 30 }} />
                  <Typography variant="h6">{item}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer CTA */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #002B5C 0%, #001F42 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Let's plan your move the right way.
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Call 01582 967 987, email info@forklifthiresolution.co.uk, or request a site visit using the form.
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

export default TransportRemovals;
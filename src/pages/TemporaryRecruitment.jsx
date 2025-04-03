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
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import EngineeringIcon from '@mui/icons-material/Engineering';
import VisibilityIcon from '@mui/icons-material/Visibility';

const roles = [
  {
    title: 'Forklift Operators',
    icon: PersonIcon,
    description: 'Certified and experienced, ready for site or warehouse',
  },
  {
    title: 'Transport Drivers',
    icon: LocalShippingIcon,
    description: 'Van, flatbed, and light goods drivers (with CPC if required)',
  },
  {
    title: 'Warehouse Operatives',
    icon: WarehouseIcon,
    description: 'Picking, packing, loading, goods-in',
  },
  {
    title: 'Labourers & Goods Movers',
    icon: EngineeringIcon,
    description: 'Event setups, removals, stock shifts',
  },
  {
    title: 'Banksmen & Spotters',
    icon: VisibilityIcon,
    description: 'For site safety and regulated loading/unloading',
  },
];

const benefits = [
  'Fully vetted, trained, and referenced staff',
  'All operated services come with full comprehensive insurance',
  'Last-minute, short-term or ongoing coverage',
  'Night shift, weekend and bank holiday availability',
  'We handle HR, insurance, payroll & scheduling',
  'Immediate response for urgent staffing gaps',
];

const candidateRoles = [
  'Forklift drivers',
  'Warehouse staff',
  'Drivers & removals labour',
  'Night shift cover workers',
];

const safetyPoints = [
  'In-house training and refresher available',
  'PPE provided if required',
  'All licences and documents verified',
  'Operators available for specific forklift types including JAC models',
  'Health & Safety standards followed on all sites',
];

function TemporaryRecruitment() {
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
            Reliable Staff When You Need Them – Forklift, Drivers & Warehouse
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: 800 }}>
            We provide fully trained and insured temporary workers across logistics, transport, and warehousing. Whether it's a shift, a week, or a month — we've got you covered.
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
              Request Staff
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
              Speak to Recruitment Team
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
              Apply to Work With Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Roles We Supply */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Roles We Supply
        </Typography>
        <Grid container spacing={4}>
          {roles.map((role, index) => (
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
                  <role.icon
                    sx={{
                      fontSize: 48,
                      color: 'primary.main',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h5" gutterBottom>
                    {role.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {role.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} key={index}>
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
            sx={{ mt: 4, fontStyle: 'italic' }}
          >
            Whether you need cover for an emergency, peak demand, or an ongoing project — we can step in today.
          </Typography>
        </Container>
      </Box>

      {/* How It Works */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              step: 1,
              title: 'Tell us who you need, when and where',
            },
            {
              step: 2,
              title: 'We confirm staff availability, rate and dispatch time',
            },
            {
              step: 3,
              title: 'Our trained staff arrive fully briefed and ready to work',
            },
          ].map((step) => (
            <Grid item xs={12} sm={4} key={step.step}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  position: 'relative',
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
                    zIndex: 0,
                  }}
                >
                  {step.step}
                </Typography>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    {step.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mt: 4, fontStyle: 'italic' }}
        >
          All workers carry ID and are briefed on your job expectations prior to arrival.
        </Typography>
      </Container>

      {/* For Candidates */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 700 }}
          >
            For Candidates – Join Our Team
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            Looking for temporary work?
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 4 }}>
            We're actively recruiting:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {candidateRoles.map((role, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.paper',
                  }}
                >
                  <Typography variant="h6">{role}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{ mr: 2 }}
            >
              Apply to Work With Us
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Send WhatsApp
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Safety & Compliance */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Safety & Compliance
        </Typography>
        <Grid container spacing={3}>
          {safetyPoints.map((point, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <CheckCircleOutlineIcon
                  color="primary"
                  sx={{ fontSize: 30, mt: 0.5 }}
                />
                <Typography variant="h6">{point}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer CTA */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            Need trusted, skilled staff today?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Call 01582 967 987, email team@forklifthiresolution.co.uk, or request a callback now.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/contact')}
          >
            Request a Callback
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default TemporaryRecruitment;
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'secondary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Forklift Hire Solutions Ltd
            </Typography>
            <Typography variant="body2">
              UK's leading provider of forklift services, including equipment hire, operator provision,
              training, and comprehensive logistics support.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { text: 'Equipment', path: '/equipment' },
                { text: 'Pricing', path: '/pricing' },
                { text: 'Book Now', path: '/booking' },
                { text: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.text}
                  component={RouterLink}
                  to={link.path}
                  color="inherit"
                  sx={{
                    mb: 1,
                    '&:hover': {
                      color: 'primary.light',
                    },
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" paragraph>
              122 Tenby Drive<br />
              Luton, Bedfordshire<br />
              LU4 9BN
            </Typography>
            <Typography variant="body2" paragraph>
              Phone: 01582 967 987 / +44 7534 629 583<br />
              Email: info@forklifthiresolution.co.uk
            </Typography>
            <Box sx={{ mt: 2 }}>
              {[
                { icon: FacebookIcon, label: 'Facebook' },
                { icon: TwitterIcon, label: 'Twitter' },
                { icon: LinkedInIcon, label: 'LinkedIn' },
                { icon: InstagramIcon, label: 'Instagram' },
              ].map((social) => (
                <IconButton
                  key={social.label}
                  color="inherit"
                  aria-label={social.label}
                  sx={{
                    mr: 1,
                    '&:hover': {
                      color: 'primary.light',
                    },
                  }}
                >
                  <social.icon />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, opacity: 0.7 }}
        >
          © {new Date().getFullYear()} Forklift Hire Solutions Ltd. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
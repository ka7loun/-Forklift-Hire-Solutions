import React from 'react';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box as MuiBox } from '@mui/material';

// Get the base URL from Vite's environment
const baseUrl = import.meta.env.BASE_URL;

const servicePages = [
  '/forklift-hire',
  '/transport-removals',
  '/forklift-sales',
  '/recruitment'
];

const pages = [
  { title: 'Equipment', path: '/equipment' },
  { title: 'Buy', path: '/buy' },
  { title: 'Pricing', path: '/pricing' },
  { title: 'Book Now', path: '/booking' },
  { title: 'Contact', path: '/contact' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();
  const isServicePage = servicePages.includes(location.pathname);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" color="default" elevation={2}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <MuiBox
              component="img"
              src={`${baseUrl}images/logo.png`}
              alt="Forklift Hire Solutions"
              sx={{
                display: { xs: 'none', md: 'flex' },
                height: 100,
                mr: 4,
                ml: 3,
                cursor: 'pointer',
                filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
          </RouterLink>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {isServicePage ? (
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to="/#services"
                >
                  <Typography textAlign="center">Back to Services</Typography>
                </MenuItem>
              ) : (
                pages.map((page) => (
                  <MenuItem
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    component={RouterLink}
                    to={page.path}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))
              )}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <RouterLink to="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <MuiBox
              component="img"
              src={`${baseUrl}images/logo.png`}
              alt="Forklift Hire Solutions"
              sx={{
                display: { xs: 'flex', md: 'none' },
                height: 80,
                mr: 3,
                ml: 2,
                cursor: 'pointer',
                filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
          </RouterLink>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {isServicePage ? (
              <Button
                component={RouterLink}
                to="/#services"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 1,
                  color: 'secondary.main',
                  display: 'block',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                Back to Services
              </Button>
            ) : (
              pages.map((page) => (
                <Button
                  key={page.title}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: 'secondary.main',
                    display: 'block',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {page.title}
                </Button>
              ))
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
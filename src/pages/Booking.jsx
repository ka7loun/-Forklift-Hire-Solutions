import React from 'react';
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useNavigate } from 'react-router-dom';

const steps = ['Select Equipment', 'Choose Duration', 'Your Details', 'Confirm Booking'];

const equipment = [
  {
    id: 1,
    name: 'Standard Warehouse Forklift',
    image: '/images/warehouse-forklift.svg',
    dailyRate: 250,
    capacity: '5,000 lbs',
  },
  {
    id: 2,
    name: 'Heavy-Duty Rough Terrain',
    image: '/images/rough-terrain-forklift.svg',
    dailyRate: 350,
    capacity: '8,000 lbs',
  },
  {
    id: 3,
    name: 'Electric Reach Truck',
    image: '/images/electric-forklift.svg',
    dailyRate: 300,
    capacity: '4,500 lbs',
  },
];

const rentalDurations = [
  { value: 'daily', label: 'Daily', multiplier: 1 },
  { value: 'weekly', label: 'Weekly', multiplier: 5 },
  { value: 'monthly', label: 'Monthly', multiplier: 15 },
];

function Booking() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [rentalDetails, setRentalDetails] = useState({
    duration: 'daily',
    startDate: new Date(),
    endDate: new Date(),
  });
  const [customerDetails, setCustomerDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Submit booking
      handleBookingSubmit();
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleEquipmentSelect = (equipment) => {
    setSelectedEquipment(equipment);
  };

  const handleDurationChange = (event) => {
    setRentalDetails((prev) => ({
      ...prev,
      duration: event.target.value,
    }));
  };

  const handleCustomerDetailsChange = (event) => {
    const { name, value } = event.target;
    setCustomerDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookingSubmit = () => {
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', {
      equipment: selectedEquipment,
      rental: rentalDetails,
      customer: customerDetails,
    });

    setSnackbar({
      open: true,
      message: 'Booking submitted successfully! We will contact you shortly.',
      severity: 'success',
    });

    // Reset form and redirect to home after successful booking
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const calculateTotal = () => {
    if (!selectedEquipment) return 0;
    const duration = rentalDurations.find((d) => d.value === rentalDetails.duration);
    return selectedEquipment.dailyRate * duration.multiplier;
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            {equipment.map((item) => (
              <Grid item xs={12} md={4} key={item.id}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    border: selectedEquipment?.id === item.id ? 2 : 0,
                    borderColor: 'primary.main',
                  }}
                  onClick={() => handleEquipmentSelect(item)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                    sx={{ objectFit: 'contain', p: 2 }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography color="primary" variant="h6">
                      ${item.dailyRate}/day
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Capacity: {item.capacity}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        );

      case 1:
        return (
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <RadioGroup
              value={rentalDetails.duration}
              onChange={handleDurationChange}
            >
              {rentalDurations.map((duration) => (
                <FormControlLabel
                  key={duration.value}
                  value={duration.value}
                  control={<Radio />}
                  label={
                    <Box>
                      <Typography variant="h6">
                        {duration.label} Rental
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${selectedEquipment?.dailyRate * duration.multiplier}
                      </Typography>
                    </Box>
                  }
                />
              ))}
            </RadioGroup>
            <Box sx={{ mt: 4 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <DateTimePicker
                      label="Start Date & Time"
                      value={rentalDetails.startDate}
                      onChange={(newValue) =>
                        setRentalDetails((prev) => ({
                          ...prev,
                          startDate: newValue,
                        }))
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DateTimePicker
                      label="End Date & Time"
                      value={rentalDetails.endDate}
                      onChange={(newValue) =>
                        setRentalDetails((prev) => ({
                          ...prev,
                          endDate: newValue,
                        }))
                      }
                    />
                  </Grid>
                </Grid>
              </LocalizationProvider>
            </Box>
          </Box>
        );

      case 2:
        return (
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={customerDetails.firstName}
                  onChange={handleCustomerDetailsChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={customerDetails.lastName}
                  onChange={handleCustomerDetailsChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={customerDetails.email}
                  onChange={handleCustomerDetailsChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={customerDetails.phone}
                  onChange={handleCustomerDetailsChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="company"
                  value={customerDetails.company}
                  onChange={handleCustomerDetailsChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Delivery Address"
                  name="address"
                  multiline
                  rows={3}
                  value={customerDetails.address}
                  onChange={handleCustomerDetailsChange}
                />
              </Grid>
            </Grid>
          </Box>
        );

      case 3:
        return (
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Booking Summary
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body1">Equipment:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {selectedEquipment?.name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Rental Duration:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {rentalDetails.duration.charAt(0).toUpperCase() +
                      rentalDetails.duration.slice(1)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Total Amount:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" color="primary">
                    ${calculateTotal()}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Customer Details
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Name:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {customerDetails.firstName} {customerDetails.lastName}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Email:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{customerDetails.email}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Phone:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{customerDetails.phone}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        );

      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Book Your Equipment
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Complete the steps below to reserve your forklift
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 4, mb: 4 }}>{getStepContent(activeStep)}</Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={
              (activeStep === 0 && !selectedEquipment) ||
              (activeStep === 2 &&
                (!customerDetails.firstName ||
                  !customerDetails.lastName ||
                  !customerDetails.email ||
                  !customerDetails.phone ||
                  !customerDetails.address))
            }
          >
            {activeStep === steps.length - 1 ? 'Submit Booking' : 'Next'}
          </Button>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default Booking;
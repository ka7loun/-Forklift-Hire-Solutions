import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const pricingPlans = [
  {
    title: 'Daily Rental',
    price: '250',
    period: 'per day',
    features: [
      'Flexible pickup and return times',
      'Full tank of fuel',
      'Basic operator training',
      '24/7 support',
      'Maintenance included',
    ],
    description: 'Perfect for short-term projects and temporary needs',
  },
  {
    title: 'Weekly Rental',
    price: '1,000',
    period: 'per week',
    features: [
      'All Daily Rental features',
      'Discounted weekly rate',
      'Priority support',
      'Free delivery within 25 miles',
      'Extended operating hours',
    ],
    description: 'Ideal for medium-duration projects',
    recommended: true,
  },
  {
    title: 'Monthly Rental',
    price: '3,500',
    period: 'per month',
    features: [
      'All Weekly Rental features',
      'Best value for long-term use',
      'Dedicated account manager',
      'Backup equipment guarantee',
      'Flexible payment terms',
    ],
    description: 'Best choice for long-term projects and regular use',
  },
];

const faqs = [
  {
    question: 'What is included in the rental price?',
    answer: 'Our rental prices include basic operator training, maintenance, insurance coverage, and 24/7 support. Fuel and delivery charges may apply depending on your rental plan.',
  },
  {
    question: 'Do you require a deposit?',
    answer: 'Yes, we require a refundable security deposit that varies based on the equipment type and rental duration. The deposit is fully refundable upon return of the equipment in good condition.',
  },
  {
    question: 'What are your payment terms?',
    answer: 'We accept all major credit cards, bank transfers, and purchase orders from qualified businesses. Payment is required before the rental period begins.',
  },
  {
    question: 'What if I need to extend my rental?',
    answer: 'Rental extensions are available based on equipment availability. Please contact us at least 24 hours before your rental period ends to arrange an extension.',
  },
  {
    question: 'Do you provide operator training?',
    answer: 'Yes, basic operator training is included with all rentals. Advanced training and certification programs are available for an additional fee.',
  },
];

function Pricing() {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Typography variant="h2" align="center" gutterBottom>
          Transparent Pricing
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Choose the rental plan that best fits your needs
        </Typography>

        {/* Pricing Plans */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {pricingPlans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  ...(plan.recommended && {
                    border: 2,
                    borderColor: 'primary.main',
                  }),
                }}
              >
                {plan.recommended && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: -32,
                      transform: 'rotate(45deg)',
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 4,
                      py: 0.5,
                    }}
                  >
                    Best Value
                  </Box>
                )}
                <CardHeader
                  title={plan.title}
                  titleTypographyProps={{ align: 'center' }}
                  sx={{ bgcolor: 'grey.100' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${plan.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {plan.period}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{ fontStyle: 'italic', mb: 2 }}
                  >
                    {plan.description}
                  </Typography>
                  <List>
                    {plan.features.map((feature) => (
                      <ListItem key={feature} sx={{ py: 1 }}>
                        <ListItemIcon>
                          <CheckIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    fullWidth
                    variant={plan.recommended ? 'contained' : 'outlined'}
                    color="primary"
                    onClick={() => navigate('/booking')}
                    sx={{ mt: 2 }}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 8 }} />

        {/* FAQs Section */}
        <Typography variant="h3" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 8,
            p: 4,
            bgcolor: 'secondary.main',
            color: 'white',
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Need a Custom Quote?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Contact us for special rates on long-term rentals or multiple units
          </Typography>
          <Button
            variant="contained"
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

export default Pricing;
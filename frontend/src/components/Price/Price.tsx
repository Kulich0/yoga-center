import React from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, Container, styled } from '@mui/material';

const StyledBox = styled(Box)({
  backgroundColor: '#F9F9FF',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '60px 20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginTop: '30px',
});

const UnderlinedTypography = styled(Typography)({
  position: 'relative',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  marginBottom: '10px',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    bottom: '-3px',
    left: '0%',
    backgroundColor: '#9370DB',
  },
});

const StyledCard = styled(Card)({
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  padding: '20px',
});

const priceList = [
  { title: 'Йога в гамаках для начинающих', description: '4 занятия - 1800 руб, 8 занятий - 3200 руб, 12 занятий - 3600 руб.' },
  { title: 'Йога в гамаках средний уровень', description: '4 занятия - 1800 руб, 8 занятий - 3200 руб, 12 занятий - 3600 руб.' },
  { title: 'Хатха йога', description: '4 занятия - 1800 руб, 8 занятий - 3200 руб, 12 занятий - 3600 руб.' },
  { title: 'Йога нидра', description: '4 занятия - 1800 руб, 8 занятий - 3200 руб, 12 занятий - 3600 руб.' },
  { title: 'Индивидуальные тренировки', description: '1200 руб.' },
];

const Price: React.FC = () => {
  return (
    <StyledBox>
      <Container>
        <Typography variant='h3' component='h1' gutterBottom align="center" sx={{ marginBottom: '40px' }}>
          Прайс
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {priceList.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <CardContent>
                  <UnderlinedTypography variant='h6'>{item.title}</UnderlinedTypography>
                  <Typography variant='body2' sx={{ marginTop: '10px' }}>{item.description}</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        
        <Box display="flex" justifyContent="center" marginTop="40px">
          <Button
            href='https://web.telegram.org/k/#1438512104'
            variant="contained"
            sx={{
              backgroundColor: '#9370DB',
              padding: '10px 20px',
              fontSize: '1rem',
              
              '&:hover': { backgroundColor: '#7A5DC7' },
            }}
          >
            Выбрать абонемент
          </Button>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default Price;

import React, { useState } from 'react';
import { Grid, Button, TextField, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Grid)({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const FormContainer = styled(Grid)({
  width: '100%',
  maxWidth: 400,
  textAlign: 'center',
});

const KeypadButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  fontSize: '1.2rem',
}));
export default function RegistrationView() {
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  
  const handleChange = (e) => {
    setUserId(e.target.value);
  };
  
  const handleClear = () => {
    setUserId('');
  };
  
  const handleSubmit = () => {
    setLoading(true);
    // Simulating async operation (e.g., API call)
    setTimeout(() => {
      setLoading(false);
      if (userId.trim() === '') {
        setFeedback('User ID is required.');
      } else {
        // Process user registration
        setFeedback(`User ${userId} registered successfully!`);
        setUserId('');
      }
    }, 1500);
  };
  
  return (
    <Container>
      <FormContainer container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            User Registration
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="User ID"
            variant="outlined"
            value={userId}
            onChange={handleChange}
            sx={{ width: '100%' }} // Make input full width
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'clear', 0, 'submit'].map((item) => (
              <Grid key={item} item xs={4} sm={4} md={4}>
                <KeypadButton
                  fullWidth
                  variant="outlined"
                  onClick={() => {
                    if (typeof item === 'number' || item === 'clear' || item === 'submit') {
                      if (item === 'clear') {
                        handleClear();
                      } else if (item === 'submit') {
                        handleSubmit();
                      } else {
                        setUserId(userId + item);
                      }
                    }
                  }}
                >
                  {item}
                </KeypadButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {loading && (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        )}
        {feedback && (
          <Grid item xs={12}>
            <Typography variant="body1" color={feedback.startsWith('User') ? 'success' : 'error'}>
              {feedback}
            </Typography>
          </Grid>
        )}
      </FormContainer>
    </Container>
  );
};

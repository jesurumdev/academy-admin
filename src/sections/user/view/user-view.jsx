import React from 'react';
import { styled } from '@mui/system';
import { Grid, Paper, Avatar, Divider, Typography } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 600,
  margin: 'auto',
  backgroundColor: '#f9f9f9',
  borderRadius: 12,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
}));
export default function SingleUserView() {
  return (
    <StyledPaper>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={3}>
          <StyledAvatar alt="User Avatar" src="/path/to/avatar.jpg" />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography variant="h4" gutterBottom>
            John Doe
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Web Developer
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" gutterBottom>
        Bio
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus nulla non massa mattis, ac posuere enim
        finibus. Nulla facilisi. Duis vitae lacinia tortor. Integer in aliquam velit. Mauris ultrices ligula vitae
        libero blandit, ac tempor sem mollis.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: john.doe@example.com
      </Typography>
      <Typography variant="body1" gutterBottom>
        Phone: +1 (123) 456-7890
      </Typography>
      <Typography variant="body1" gutterBottom>
        Address: 123 Main Street, City, Country
      </Typography>
    </StyledPaper>
  );
}
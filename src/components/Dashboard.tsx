// components/Dashboard.tsx
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Employees
            </Typography>
            <Typography variant="h5" component="h2">
              120
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Pending Loans
            </Typography>
            <Typography variant="h5" component="h2">
              8
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Add more dashboard cards as needed */}
    </Grid>
  );
};

export default Dashboard;

'use client';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const StyledCard = styled(Card)({
  margin: '10px',
  width: '45%',
  display: 'inline-block',
  cursor: 'pointer',
});

const PayslipCard = () => {
  return (
    <Link href="/Payslip" legacyBehavior>
      <StyledCard>
        <CardContent>
          <Typography variant="h5" component="div">
            Payslip
          </Typography>
          <Typography variant="body2">
            Generate and view payslips for employees.
          </Typography>
        </CardContent>
      </StyledCard>
    </Link>
  );
};

const Form16Card = () => {
  return (
    <Link href="/Form16" legacyBehavior>
      <StyledCard>
        <CardContent>
          <Typography variant="h5" component="div">
            Form 16
          </Typography>
          <Typography variant="body2">
            Generate and view Form 16 for employees.
          </Typography>
        </CardContent>
      </StyledCard>
    </Link>
  );
};

export default function HomePage() {
  return (
    <div>
      {/* <PayslipCard />
      <Form16Card /> */}
    </div>
  );
}
// components/Layout.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Payroll Management System</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;

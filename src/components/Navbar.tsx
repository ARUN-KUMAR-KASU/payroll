// 'use client';
// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Link from 'next/link';
// import { styled } from '@mui/material/styles';

// const Root = styled('div')({
//     flexGrow: 1,
// });

// const Title = styled(Typography)({
//     flexGrow: 1,
// });

// const StyledLink = styled(Link)({
//     textDecoration: 'none',
//     color: 'inherit',
// });

// const Navbar: React.FC = () => {
//     return (
//         <AppBar position="static" sx={{ backgroundColor: 'grey', borderRadius: '30px 30px 30px 30px' }}>
//             <Toolbar>
//                 <Title variant="h6">
//                     Payroll
//                 </Title>
//                 <StyledLink href="/" passHref>
//                     <Button color="inherit">Home</Button>
//                 </StyledLink>
//                 <StyledLink href="/settings" passHref>
//                     <Button color="inherit">Settings</Button>
//                 </StyledLink>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Navbar;

'use client'
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CssBaseline,
  useTheme,
} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/navigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const pages = [
  { name: 'Home', path: '/', icon: <HomeIcon sx={{ color: 'white' }}/> },
  { name: 'Employees', path: '/Employees', icon: <AccountCircleIcon sx={{ color: 'white' }} /> },
  { name: 'Payslip', path: '/Payslip', icon: <AttachMoneyIcon sx={{ color: 'white' }} /> },
  { name: 'Approvals', path: '/Approvals', icon: <CheckCircleIcon sx={{ color: 'white' }} /> },
  { name: 'Form 16', path: '/Form16', icon: <DescriptionIcon sx={{ color: 'white' }} /> },
  { name: 'Reports', path: '/Reports', icon: <AssessmentIcon sx={{ color: 'white' }} /> },
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={createTheme({})}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Drawer
          variant="persistent"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '200px',
              boxSizing: 'border-box',
              marginTop: 0,
              paddingTop: 0,
              backgroundColor: '#124E66', // Changed to classic blue color
              color: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '0 4px 4px 0',
            },
          }}
        >
          <Toolbar />
          <List>
            {pages.map((page, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleNavigation(page.path)}
                selected={currentPath === page.path}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <ListItemIcon>{page.icon}</ListItemIcon>
                <ListItemText primary={page.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            marginTop: 0,
            paddingTop: 0,
            transition: createTheme().transitions.create('margin', {
              easing: createTheme().transitions.easing.sharp,
              duration: createTheme().transitions.duration.enteringScreen,
            }),
            marginLeft: mobileOpen ? '160px' : '-100px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <AppBar position="fixed" sx={{ backgroundColor: '#124E66', zIndex: 1201, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ marginRight: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                Payroll
              </Typography>
              <IconButton color="inherit" aria-label="notifications">
                <NotificationsIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="settings">
                <SettingsIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="profile">
                <AccountCircleIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Navbar;
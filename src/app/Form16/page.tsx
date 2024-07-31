'use client';
import { useState } from 'react';
import { Container, Typography, Button, Alert, Link, ListItem, ListItemText, List} from '@mui/material';
import NextLink from 'next/link';

export default function Form16() {
  const [form16Available, setForm16Available] = useState(true); // Set to true if PDF file is available
  const [form16Url, setForm16Url] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Download Form 16</Typography>
      {form16Available ? (
      // {form16Available && form16Url ? (
        <a href="/payslip.pdf" download>
          <Button variant="contained" color="primary">
            Download Form 16
          </Button>
        </a>
      ) : (
        <Alert severity="warning">
          Form 16 is not available. Please contact the HR department.
        </Alert>
      )}
      <Typography variant="body2" gutterBottom>
        Want to know more about how to get Form 16 from the government website?
      </Typography>
      <Button variant="outlined" color="secondary" onClick={() => setOpen(true)}>
        Learn More
      </Button>
      {open && (
        <div>
          <Typography variant="h4" gutterBottom>How to Get Form 16 from the Government Website</Typography>
          <Typography variant="body1" paragraph>
            To obtain Form 16 from the government, follow these steps:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="1. Ensure your employer has generated and provided Form 16 by the specified date each year (usually by June 15th)." />
            </ListItem>
            <ListItem>
              <ListItemText primary="2. Employers use payroll software or the TRACES portal to generate Form 16." />
            </ListItem>
            <ListItem>
              <ListItemText primary="3. Contact your HR department if you haven't received Form 16 by the due date." />
            </ListItem>
            <ListItem>
              <ListItemText primary="4. If needed, download Form 16 directly from the TRACES portal." />
            </ListItem>
          </List>
          <Typography variant="h6" gutterBottom>Steps to Download from TRACES Portal:</Typography>
          <List>
            <ListItem>
              <ListItemText>1. Visit the TRACES portal <a href='https://www.tdscpc.gov.in/app/login.xhtml' target='_blank' rel='noopener noreferrer' style={{ marginLeft: 'auto' }}>click here</a></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="2. Log in with your user ID (PAN) and password." />
            </ListItem>
            <ListItem>
              <ListItemText primary="3. Navigate to the 'Downloads' section and select 'Form 16'." />
            </ListItem>
            <ListItem>
              <ListItemText primary="4. Provide necessary details like financial year, PAN, and acknowledgment number of the TDS return filed by the employer." />
            </ListItem>
            <ListItem>
              <ListItemText primary="5. Download the Form 16 PDF." />
            </ListItem>
          </List>
        </div>
      )}
    </Container>
  );
}
// pages/index.js

'use client';
import React, { ReactNode, useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Box, Paper } from '@mui/material';
import { jsPDF } from 'jspdf';

// Define the FormData interface
interface FormData {
  [x: string]: ReactNode;
  name: string;
  position: string;
  salary: string;
  month: string;
  department: string;
  employeeId: string;
  bankAccount: string;
  taxDeductions: string;
}

// PayslipForm component
const PayslipForm = ({ onSubmit }: { onSubmit: (formData: FormData) => void }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    position: '',
    salary: '',
    month: '',
    department: '',
    employeeId: '',
    bankAccount: '',
    taxDeductions: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {/* First Row */}
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              name="name"
              label="Employee Name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              name="position"
              label="Position"
              fullWidth
              value={formData.position}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              name="salary"
              label="Monthly Salary"
              type="number"
              fullWidth
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              name="month"
              label="Month"
              fullWidth
              value={formData.month}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        {/* Second Row */}
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              name="department"
              label="Department"
              fullWidth
              value={formData.department}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              name="employeeId"
              label="Employee ID"
              fullWidth
              value={formData.employeeId}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              name="bankAccount"
              label="Bank Account"
              fullWidth
              value={formData.bankAccount}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              name="taxDeductions"
              label="Tax Deductions"
              fullWidth
              value={formData.taxDeductions}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: '#124E66', mt: 3 }}>
        Generate Payslip
      </Button>
    </Box>
  );
};

// Parent component
const ParentComponent = () => {
  const [submittedData, setSubmittedData] = useState<FormData[]>([]);

  const handleFormSubmit = (formData: FormData) => {
    setSubmittedData([...submittedData, formData]);
  };

  const generatePDF = (data: FormData) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Payslip', 10, 10);

    doc.setFontSize(12);
    doc.text(`Name: ${data.name}`, 10, 30);
    doc.text(`Position: ${data.position}`, 10, 40);
    doc.text(`Monthly Salary: ${data.salary}`, 10, 50);
    doc.text(`Month: ${data.month}`, 10, 60);
    doc.text(`Department: ${data.department}`, 10, 70);
    doc.text(`Employee ID: ${data.employeeId}`, 10, 80);
    doc.text(`Bank Account: ${data.bankAccount}`, 10, 90);
    doc.text(`Tax Deductions: ${data.taxDeductions}`, 10, 100);

    doc.setFontSize(10);
    doc.text('Generated by Payroll Management System', 10, 120);
    doc.save(`${data.name}_payslip.pdf`);
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography component="h1" variant="h5" gutterBottom>
          Payslip Generator
        </Typography>
        <PayslipForm onSubmit={handleFormSubmit} />
        <Box mt={4}>
          <Typography component="h2" variant="h6" gutterBottom>
            Submitted Payslips
          </Typography>
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                <strong>Name:</strong> {data.name}, <strong>Position:</strong> {data.position}, <strong>Salary:</strong> {data.salary}, <strong>Month:</strong> {data.month}, <strong>Department:</strong> {data.department}, <strong>Employee ID:</strong> {data.employeeId}, <strong>Bank Account:</strong> {data.bankAccount}, <strong>Tax Deductions:</strong> {data.taxDeductions}
                <Button variant="contained" sx={{ ml: 2 }} onClick={() => generatePDF(data)}>
                  Download PDF
                </Button>
              </li>
            ))}
          </ul>
        </Box>
      </Paper>
    </Container>
  );
};

export default ParentComponent;

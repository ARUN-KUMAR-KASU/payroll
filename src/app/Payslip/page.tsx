// 'use client'
// import React, { useState, useEffect } from 'react';
// import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, MenuItem, Select } from '@mui/material';
// import Link from 'next/link';

// // Mock function to simulate fetching payslips from a database
// const fetchPayslips = async () => {
//   // Replace with actual fetch logic
//   return [
//     { id: 1, month: 'January', year: 2024 },
//     { id: 2, month: 'February', year: 2024 },
//     { id: 3, month: 'January', year: 2023 },
//     { id: 4, month: 'February', year: 2023 },
//     { id: 5, month: 'March', year: 2023 },
//     { id: 6, month: 'April', year: 2023 },
//     { id: 7, month: 'May', year: 2023 },
//     { id: 8, month: 'June', year: 2023 },
//     { id: 9, month: 'July', year: 2023 },
//     { id: 10, month: 'August', year: 2023 },
//     { id: 11, month: 'September', year: 2023 },
//     { id: 12, month: 'October', year: 2023 },
//     { id: 13, month: 'November', year: 2023 },
//     { id: 14, month: 'December', year: 2023 },
//   ];
// };

// const years = [
//   2020, 2021, 2022, 2023, 2024, 2025,
//   2026, 2027, 2028, 2029, 2030
// ];

// const Payslip: React.FC = () => {
//   const [payslips, setPayslips] = useState<any[]>([]);
//   const [selectedYear, setSelectedYear] = useState<number | string>('');

//   const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     setSelectedYear(event.target.value as number);
//   };

//   useEffect(() => {
//     const getPayslips = async () => {
//       const data = await fetchPayslips();
//       setPayslips(data.filter(payslip => payslip.year === selectedYear));
//     };
//     if (selectedYear) {
//       getPayslips();
//     }
//   }, [selectedYear]);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Generated Payslips
//       </Typography>
//       <Select
//         value={selectedYear}
//         onChange={(event) => handleYearChange(event as React.ChangeEvent<{ value: unknown }>)}
//         displayEmpty
//         fullWidth
//       >
//         <MenuItem value="" disabled>
//           Select Year
//         </MenuItem>
//         {years.map((year, index) => (
//           <MenuItem key={index} value={year}>
//             {year}
//           </MenuItem>
//         ))}
//       </Select>
//       {selectedYear && (
//         <Typography variant="h6" style={{ marginTop: '20px' }}>
//           Payslip for {selectedYear}
//         </Typography>
//       )}
//       <TableContainer>
//         <Table style={{ border: '1px solid black' }}>
//           <TableHead>
//             <TableRow style={{ borderBottom: '1px solid black', border: '1px solid black' }}>
//               <TableCell style={{ border: '1px solid black' }}>Month</TableCell>
//               <TableCell style={{ border: '1px solid black' }}>Year</TableCell>
//               <TableCell style={{ border: '1px solid black' }}>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {payslips.length > 0 ? (
//               payslips.map((payslip) => (
//                 <TableRow key={payslip.id} style={{ border: '1px solid black' }}>
//                   <TableCell style={{ border: '1px solid black' }}>{payslip.month}</TableCell>
//                   <TableCell style={{ border: '1px solid black' }}>{payslip.year}</TableCell>
//                   <TableCell style={{ border: '1px solid black' }}>
//                     <Link href="/ViewPayslip" passHref>
//                       <Button variant="outlined" size="small" style={{ border: '1px solid black' }}>View Payslip</Button>
//                     </Link>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={3} style={{ border: '1px solid black', textAlign: 'center' }}>
//                   No data found for the selected year.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };
// export default Payslip;

'use client'
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
  textDecoration: 'none',
  '&:hover': {
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  },
  margin: '10px', // optional, for spacing between cards
}));

const PayslipCards = () => {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Link href="/Payslip/GeneratePayslip" legacyBehavior passHref>
          <StyledCard>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                Generate Payslip
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
                Generate new payslips for employees.
              </Typography>
            </CardContent>
          </StyledCard>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Link href="/payslip-history" legacyBehavior passHref>
          <StyledCard>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                Payslip History
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
                View and manage past payslips.
              </Typography>
            </CardContent>
          </StyledCard>
        </Link>
      </Grid>
    </Grid>
  );
};

export default PayslipCards;
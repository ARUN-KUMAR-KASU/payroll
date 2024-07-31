'use client';
import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Link as MuiLink, Button } from '@mui/material';
const ViewPayslip = () => {
    const payslipData = {
        companyLogo: 'path/to/logo.png',
        companyName: 'Company Name',
        companyAddress: 'Company Address',
        companyContact: 'Company Contact Information',
        monthYear: 'Month, Year',
        employeeName: 'Employee Name',
        employeeID: 'Employee ID',
        dateOfJoining: 'Date- Month-Year',
        department: 'Department',
        designation: 'Designation',
        paidDays: 'Paid Days',
        totalDays: 'Total Days',
        lop: 'Days',
        panNumber: 'Id',
        epfUanNumber: 'Number',
        accountNumber: 'Account Number',
        earnings: {
            basicSalary: 'Basic Salary',
            hra: 'HRA',
            medicalAllowance: 'Medical Allowance',
            transportAllowance: 'Transport Allowance',
            conveyanceAllowance: 'Conveyance Allowance',
            otherAllowances: 'Other Allowances',
            totalEarnings: 'Total Earnings'
        },
        deductions: {
            providentFund: 'Provident Fund',
            professionalTax: 'Professional Tax',
            esi: 'ESI',
            tds: 'TDS',
            otherDeductions: 'Other Deductions',
            totalDeductions: 'Total Deductions'
        },
        netPayInWords: 'Net Pay In Words',
        pdfLink: 'payslip format.pdf'
    };
    const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = payslipData.pdfLink;
        link.download = "payslip.pdf";
        link.click();
    };
    return (
        <div className="payslip" style={{ padding: 16, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <img src="MTS.jpg" alt="logo" style={{ width: '50px', height: '50px', margin: 'auto' }}/>
                <Typography variant="h4" style={{ textAlign: 'center', flexGrow: 1, padding: 8, margin: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>{payslipData.companyName}</Typography>
                <Typography variant="h6" style={{ textAlign: 'center', padding: 8, margin: 'auto' }}>{payslipData.employeeName}</Typography>
            </header>
            <Typography style={{ marginTop: 16, padding: 8, textAlign: 'center' }}>{payslipData.companyAddress}</Typography>
            <Typography variant="h5" style={{ marginBottom: 16, padding: 8 }}>Payslip for the Month of {payslipData.monthYear}</Typography>
            <section style={{ marginBottom: 16, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h5" style={{ marginBottom: 16, padding: 8 }}>Employee Information</Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 8 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <div style={{ flex: '1 1 50%' }}>
                                <Typography>Name: {payslipData.employeeName}</Typography>
                                <Typography>Employee ID: {payslipData.employeeID}</Typography>
                                <Typography>Date of joining: {payslipData.dateOfJoining}</Typography>
                                <Typography>Department: {payslipData.department}</Typography>
                                <Typography>Designation: {payslipData.designation}</Typography>
                            </div>
                            <div style={{ flex: '1 1 50%', marginLeft: '525px' }}>
                                <Typography>No.of Paid days/ Total Days: {payslipData.paidDays}/{payslipData.totalDays}</Typography>
                                <Typography>LOP: {payslipData.lop}</Typography>
                                <Typography>PAN Number: {payslipData.panNumber}</Typography>
                                <Typography>EPF UAN NUMBER: {payslipData.epfUanNumber}</Typography>
                                <Typography>Account Number: {payslipData.accountNumber}</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" style={{ padding: 10,margin: '10px' }}>Earnings:</Typography>
                    <Typography variant="h6" style={{ padding: 10, margin: '10px auto' }}>Deductions:</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TableContainer component={Paper} style={{ flex: 1, marginRight: 8, border: '1px solid black' }}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ padding: 8, fontWeight: 'bold', border: '1px solid black'}}>Description</TableCell>
                                    <TableCell style={{ padding: 8, fontWeight: 'bold', border: '1px solid black' }}>Amount</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} style={{ padding: 8, borderBottom: '1px solid rgba(0, 0, 0, 0.1)', border: '1px solid black' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 8, border: '1px solid black', borderTop: '1px solid black'}}>Basic Salary</TableCell>
                                    <TableCell style={{ padding: 8, border: '1px solid black', borderTop: '1px solid black'}}>{payslipData.earnings.basicSalary}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>House Rent Allowance</TableCell>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>{payslipData.earnings.hra}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>Medical Allowance</TableCell>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>{payslipData.earnings.medicalAllowance}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>Transport Allowance</TableCell>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>{payslipData.earnings.transportAllowance}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>Conveyance Allowance</TableCell>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>{payslipData.earnings.conveyanceAllowance}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>Other Allowances</TableCell>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>{payslipData.earnings.otherAllowances}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} style={{ padding: 8, borderBottom: '1px solid rgba(0, 0, 0, 0.1)', border: '1px solid black' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 8, fontWeight: 'bold', border: '1px solid black' }}>Total Earnings</TableCell>
                                    <TableCell style={{ padding: 8, fontWeight: 'bold', border: '1px solid black' }}>{payslipData.earnings.totalEarnings}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer component={Paper} style={{ flex: 1, marginLeft: 8, border: '1px solid black' }}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ padding: 8, fontWeight: 'bold', border: '1px solid black'}}>Description</TableCell>
                                    <TableCell style={{ padding: 8, fontWeight: 'bold', border: '1px solid black'}}>Amount</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} style={{ padding: 8, borderBottom: '1px solid rgba(0, 0, 0, 0.1)', border: '1px solid black' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>Provident Fund</TableCell>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>{payslipData.deductions.providentFund}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>Professional Tax</TableCell>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>{payslipData.deductions.professionalTax}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>Employee state Income</TableCell>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>{payslipData.deductions.esi}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>Tax deducted at source</TableCell>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>{payslipData.deductions.tds}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>Other Deductions</TableCell>
                                    <TableCell style={{ padding: 8 , border: '1px solid black'}}>{payslipData.deductions.otherDeductions}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} style={{ padding: 8, borderBottom: '1px solid rgba(0, 0, 0, 0.1)', border: '1px solid black' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: 8, fontWeight: 'bold', border: '1px solid black' }}>Total Deductions</TableCell>
                                    <TableCell style={{ padding: 8, fontWeight: 'bold', border: '1px solid black' }}>{payslipData.deductions.totalDeductions}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </section>
            <section style={{ marginBottom: 16 }}>
                <Typography variant="h6" style={{ padding: 8 }}>Net Pay: {payslipData.netPayInWords}</Typography>
            </section>
            <footer style={{ textAlign: 'center', marginTop: 16, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <Typography style={{ padding: 8 }}>Note: This is a computer-generated payslip and does not require a signature. Please contact HR for any discrepancies or questions.</Typography>
                <Button variant="contained" color="primary" onClick={downloadPdf} style={{ marginTop: 16, padding: 8 }}>
                    Download Payslip
                </Button>
                <Typography style={{ marginTop: 16, padding: 8 }}>{payslipData.companyContact}</Typography>
            </footer>
        </div>
    );
};
export default ViewPayslip;
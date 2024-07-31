// components/EmployeeList.tsx
import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'position', headerName: 'Position', width: 150 },
  { field: 'department', headerName: 'Department', width: 150 }
];

const rows = [
  { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'IT' },
  { id: 2, name: 'Jane Smith', position: 'HR Manager', department: 'HR' }
];

const EmployeeList: React.FC = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSizeOptions={[5]} checkboxSelection />
    </div>
  );
};

export default EmployeeList;

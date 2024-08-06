'use client'

import React from 'react';

const Employedetails = () => {
  const handleAdd = () => {
    // Add functionality
    console.log('Add employee');
  };

  const handleUpdate = () => {
    // Update functionality
    console.log('Update employee');
  };

  const handleDelete = () => {
    // Delete functionality
    console.log('Delete employee');
  };

  return (
    <div>
      <h1>Employee Details</h1>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Employedetails;
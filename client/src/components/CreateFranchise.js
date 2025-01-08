import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createFranchise } from '../services/api';
import { Button, TextField, Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';



const CreateFranchise = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contactNumber: '',
    status: 'active', 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createFranchise(formData);
      alert('Franchise created successfully!');
      navigate(-1);
      setFormData({
        name: '',
        location: '',
        contactNumber: '',
        status: 'active',
      }); // Reset form after success
    } catch (error) {
      alert('Error creating franchise: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <Box 
      sx={{
        maxWidth: 500,
        mx: 'auto',
        mt: 5,
        p: 3,
        bgcolor: '#ffffff',
        boxShadow: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
        Create Franchise
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            label="Franchise Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            placeholder="Enter franchise name"
          />
          <TextField
            label="Franchise Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            placeholder="Enter franchise location"
          />
          <TextField
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            placeholder="Enter contact number"
          />
          <FormControl fullWidth variant="outlined" required>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              label="Status"
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ py: 1.5, fontSize: '1rem' }}
          >
            Create Franchise
          </Button>
        </Box>
      </form>
    </Box>
  );
};


export default CreateFranchise;

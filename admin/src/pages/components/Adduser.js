import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { rest } from 'lodash';

function Adduser() {
  const [previewImage, setPreviewImage] = useState(null);
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        role: data.role,
      };

      const response = await axios.post('http://localhost:4000/employee', userData);
      if (response.status === 200) {
        handleClose();
        toast.success('Employee added successfully');
        reset();
      } else {
        alert('this user already exists');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while adding the employee');
    }
  };
  return (
    <React.StrictMode>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add new Employee
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add new employee</DialogTitle>
          <DialogContent>
            <DialogContentText>Please write details about the employ</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              {...register('name', { required: true })}
              helperText={errors.name ? 'Name is required' : ''}
            />

            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              {...register('password', { required: true })}
              helperText={errors.password ? 'Password is required' : ''}
            />

            <TextField
              margin="dense"
              id="phone"
              label="Phone Number"
              type="tel"
              fullWidth
              variant="standard"
              pattern="[0-9]{10}"
              {...register('phone', { required: true })}
              helperText={errors.phone ? 'Phone Number is required' : ''}
            />

            <TextField
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              {...register('email', { required: true })}
              helperText={errors.email ? 'Email is required' : ''}
            />

            <h2>Select employee role</h2>
            <select
              {...register('role')}
              style={{
                backgroundColor: '#f2f2f2',
                borderRadius: '4px',
                padding: '8px 12px',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
            </select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit(onSubmit)}>Add new</Button>
          </DialogActions>
        </Dialog>
      </div>
    </React.StrictMode>
  );
}

export default Adduser;

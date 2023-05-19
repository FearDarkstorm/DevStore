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

function AddProduct() {
  const [previewImage, setPreviewImage] = useState(null);
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('category', data.Category);
      formData.append('price', data.price);
      formData.append('image', data.photo[0]);

      await axios
        .post('http://localhost:4000/products', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response);
        });
        

      handleClose();
      toast.success('Product added successfully');
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while adding the product');
    }
    console.log(data);
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ADD Product</DialogTitle>
        <DialogContent>
          <DialogContentText>To add a new product, please fill in the details below.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Product Name"
            type="text"
            fullWidth
            variant="standard"
            {...register('name', { required: true })}
            helperText={errors.name ? 'Product name is required' : ''}
          />

          <TextField
            margin="dense"
            id="description"
            label="Product Description"
            multiline
            rows={4}
            fullWidth
            variant="standard"
            {...register('description', { required: true })}
            helperText={errors.description ? 'Product description is required' : ''}
          />
          <h2>Select your product category</h2>
          <select
            {...register('Category')}
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
            <option value="Processors">Processors</option>
            <option value="Circuits">Circuits</option>
            <option value="Computers">Computers</option>
            <option value="Graphic cards">Graphic cards</option>
          </select>

          <h2>Enter Product Price</h2>
          <TextField
            margin="dense"
            id="price"
            label="Product Price"
            type="number"
            fullWidth
            variant="standard"
            {...register('price', { required: true })}
            helperText={errors.price ? 'Product price is required' : ''}
          />
          <h2>Upload Product imgae</h2>
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={(e) => setPreviewImage(URL.createObjectURL(e.target.files[0]))}
            {...register('photo', { required: true })}
          />
          {errors.photo && <p style={{ color: 'red' }}>Product photo is required</p>}
          {previewImage && (
            <img src={previewImage} alt="Product Preview" style={{ maxWidth: '100%', marginTop: '1rem' }} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)}>Add new</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddProduct;

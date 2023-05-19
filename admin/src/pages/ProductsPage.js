import { Helmet } from 'react-helmet-async';

import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';

// components
import Button from '@mui/material/Button';
import AddProduct from './components/AddProduct';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import ProductCard from './ProductCard';
import Prodlist from './components/Prodlist';



// ----------------------------------------------------------------------


export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

        <AddProduct/>

        <Prodlist/>
    
 <ProductCartWidget />
      </Container>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';

function Prodlist() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/products')
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', marginTop:'40px' }}>
      {products.map(product => (
        <div key={product.id} style={{ padding: '0px 10px' }}>
          <ProductCard title={product.name} price={product.price} img={product.image_url} />
        </div>
      ))}
    </div>
  );
}

export default Prodlist;

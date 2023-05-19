import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();

  return (
    <div>
      <h1>This is product page {id}</h1>
    </div>
  );
}

export default Product;

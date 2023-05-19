import React from 'react';
import { Button, Grid } from '@mui/material';


/* eslint-disable react/self-closing-comp */
function ProductCard(props) {
  

  return (
    <div style={{ width: '270px', height: '320px', border: '1px solid black', borderRadius: '20px', overflow: 'hidden' }}>
      <div>
        <img  src={`http://localhost:4000/uploads/${props.img}`} alt={props.name} style={{height: '220px', position: 'relative',backgroundRepeat:'no-repeat' }}></img>
        <div style={{ fontWeight: 'bold', margin: '10px 10px' }}>{props.title}</div>
        <div style={{ margin: '0px 20px' }}>
          <div style={{ display: 'block', textAlign: 'end' }}>PKR{'  '}{props.price}</div>
          <Button variant='contained'>Add to cart</Button>
          
        </div>
      </div>
    </div>
  );
}

export default ProductCard;



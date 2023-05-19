import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const OrdersList = ({ orders }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOpenPopup = (order) => {
    setSelectedOrder(order);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setSelectedOrder(null);
    setOpenPopup(false);
  };

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Orders</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Order ID</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Date</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Customer Name</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Product</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Status</th>
            <th style={{ padding: '12px 15px', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px 15px' }}>{order.id}</td>
              <td style={{ padding: '12px 15px' }}>{order.date}</td>
              <td style={{ padding: '12px 15px' }}>{order.customerName}</td>
              <td style={{ padding: '12px 15px' }}>{order.product}</td>
              <td style={{ padding: '12px 15px' }}>{order.status}</td>
              <td style={{padding: '12px 15px', textAlign: 'left'}}>
                <Button onClick={() => handleOpenPopup(order)}>Get more details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dialog open={openPopup} onClose={handleClosePopup}>
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          {selectedOrder && (
            <div>
              <p><strong>Order ID:</strong> {selectedOrder.id}</p>
              <p><strong>Date:</strong> {selectedOrder.date}</p>
              <p><strong>Customer Name:</strong> {selectedOrder.customerName}</p>
              <p><strong>Product:</strong> {selectedOrder.product}</p>
              <p><strong>Status:</strong> {selectedOrder.status}</p>
              {/* add more details here */}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            console.log('i am clicked')
          }}>Update status</Button>
          <Button onClick={handleClosePopup}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrdersList;

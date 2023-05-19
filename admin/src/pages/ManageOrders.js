import React from 'react'
import OrdersList from './components/Orderslist'

function ManageOrders() {
    
const orders = [  
    {    
      id: 1,    
      date: '2022-05-11',    
      customerName: 'John Doe',    
      product: 'Rasberry Pi',    
      status: 'Delivered',  
    },  
    {    
      id: 2,    
      date: '2022-05-12',    
      customerName: 'Jane Smith',    
      product: 'Ryzen 5 5500',    
      status: 'Pending',  
    },  
    {    
      id: 3,    
      date: '2022-05-13',    
      customerName: 'Bob Johnson',    
      product: 'Circuit x',    
      status: 'Shipped',  
    },
  ];
  
  return (
    <div>
       <OrdersList orders={orders} />
    </div>
  )
}

export default ManageOrders

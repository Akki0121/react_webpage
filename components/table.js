import React from 'react'

export default function table() {
  return (
    <div className='table'>
        <tablebody className="table-body" margin="50px 30px">
        <tr>
                <th>Product Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Total Sales</th>
        </tr>        
        <tr>
                <td>Abstract 3D</td>
                <td>32 in stock</td>
                <td>$ 45.99</td>
                <td>20</td>
        </tr>
        <tr>
                <td>Sarphens Illustration</td>
                <td>32 in stock</td>
                <td>$ 45.99</td>
                <td>20</td>
        </tr>
        </tablebody>
    </div>
  )
}

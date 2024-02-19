import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = ({products}) => {
  return (
  <>
 <main style={{float:"left",width:"1200px"}} className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 className="h2">Thống kê</h1>
  </div>
 <div classname="App" >
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
    {products.map((product, index) =>(
      <tr key={index}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
      </tr>
       ))}
       </tbody>
  </table>
</div>

</main>


  </>
  )
}

export default DashboardPage
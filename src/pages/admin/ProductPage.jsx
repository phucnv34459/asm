import { Link, NavLink } from "react-router-dom"


const ProductPageWebsite = ({products}) => {
  return (
    <div>
        <h1 style={{textAlign:"center",marginBottom:"40px"}}>Sản phẩm</h1>
        <div  style={{display:"flex"}} className="row">
         {products.map((product, index) =>(
             <div className="col-sm-6 col-lg-4 mb-4" key={index}>
               <div  style={{width:"300px",height:"380px",marginLeft:"70px",textAlign:"center"}} className="card">
                <img style={{width:"100%"}} src={product.image} alt="" />
                 <div className="card-body">
                  <h6><Link style={{textDecoration:"none",}} to={`/products/${product.id}`}>{product.name}</Link></h6> 
                   <p className="card-text">Giá sản phẩm : {product.price}</p>
                 </div>
               </div>
             </div>
          
         ))}
        </div>
    </div>
  )
}


export default ProductPageWebsite
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductsById } from '../../api/product';

const ProductDetail = () => {
   const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        (async() => {
          const data = await getProductsById(id);  
          setProduct(data);
        })();
      },[id]);
  return (
    
  <div></div>

  )
}

export default ProductDetail
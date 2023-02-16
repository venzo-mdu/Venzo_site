import React,{useEffect} from 'react'
import Product from '../component/product_development/product'
function Product_development() {
  useEffect(()=>{
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    })
  },[])
  return (
    <div className='blockchainbody'>
      <Product />
    </div>
  )
}

export default Product_development

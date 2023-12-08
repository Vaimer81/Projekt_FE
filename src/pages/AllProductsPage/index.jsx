import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import s from './index.module.css'
import AllProductsSort from '../../components/FilterForms/AllProductsSort'
// import FilterForm from '../../components/FilterForms/FilterForm'
// import SortForm from '../../components/FilterForms/SortSales'
// import DiscountForm from '../../components/FilterForms/DiscountForm'


export default function AllProductsPage() {

  const all_products_state = useSelector(state => state.allProducts)

  // console.log(all_products_state);

  return (
	  <div> 
		 <h1>All Products</h1>
		  {/* <FilterForm />
		  <br />
		  <AllProductsSort />
		   <br />
      <SortForm />
      <br /> */}
		<AllProductsSort/>

      <ProductsContainer products={all_products_state} />
    </div>
  )
}

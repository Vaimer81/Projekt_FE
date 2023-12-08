import { loadAllProductsAction } from "../store/reducer/allProductsReducer"
import { loadProductsByCategoryAction } from "../store/reducer/productsByCategoryReducer";
import { loadSingleProductAction } from "../store/reducer/singleProductReducer";

export const getProductsByCategory = (id) => {
  return dispatch => {
  fetch(`https://be-deploy.onrender.com/categories/${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadProductsByCategoryAction(json.data)))
}
}


export const getAllProducts = dispatch => {
  fetch('https://be-deploy.onrender.com/products/all')
      .then(res => res.json())
      .then(json => dispatch(loadAllProductsAction(json)))
}


export const getSingleProduct = (id) => {
  return dispatch => {
  fetch(`https://be-deploy.onrender.com/products/${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadSingleProductAction(json[0])))
}
}

export const sendOrder = new_product => {
	fetch('https://be-deploy.onrender.com/order/send', {
	  method: 'POST',
	  body: JSON.stringify({new_product})
	})
	  .then(res => res.json())
	  .then(json => console.log(json, 'new order added'))
  }


  export const addNewProductSale = new_product => {
	fetch('https://be-deploy.onrender.com/sale/send', {
	  method: 'POST',
	  body: JSON.stringify({new_product})
	})
	  .then(res => res.json())
	  .then(json => console.log(json, 'new product added'))
  }



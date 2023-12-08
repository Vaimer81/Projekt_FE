import { loadAllCategoriesAction } from "../store/reducer/categoriesReducer"

export const getAllCategories = (dispatch) => {
  fetch('https://projekt-be.vercel.app/categories/all')
    .then(res => res.json())
    .then(json => dispatch(loadAllCategoriesAction(json)))
}

 
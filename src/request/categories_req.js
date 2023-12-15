import { loadAllCategoriesAction } from "../store/reducer/categoriesReducer"

export const getAllCategories = (dispatch) => {
  fetch('https://project-f.onrender.com/categories/all')
    .then(res => res.json())
    .then(json => dispatch(loadAllCategoriesAction(json)))
}

 
import{configureStore} from "@reduxjs/toolkit"
import categoryReducer from "./Feature/categorySlice"
import productReducer from "./Feature/productSlice"


const Store =configureStore({
    reducer:{
        categoryR:categoryReducer,
        productR:productReducer
    }
})
//  console.log(Store.getState());
export default Store


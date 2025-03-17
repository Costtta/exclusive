import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './productsSlice'
import salesSlice from './salesSlice'
import wishListSlice from './wishListSlice'

export const store = configureStore({
    reducer: {
        products: productsSlice,
        sales: salesSlice,
        wishList: wishListSlice
    }
})
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState: [],
    name: 'cartSlice',
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        clearAll: (state) => {}
    },
})

export const {addToCart, clearAll} = cartSlice.actions;
export default cartSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('productsSlice/fetchSales', async () => {
    const res = await fetch('https://67c521b1c4649b9551b54bc7.mockapi.io/Products');
    const data = await res.json();
    return data;
})

const productsSlice = createSlice({
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    name: 'productsSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export default productsSlice.reducer;
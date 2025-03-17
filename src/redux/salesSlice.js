import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSales = createAsyncThunk('salesSlice/fetchSales', async () => {
    const res = await fetch('https://67c521b1c4649b9551b54bc7.mockapi.io/Sales');
    const data = await res.json();
    return data;
})

const salesSlice = createSlice({
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    name: 'salesSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSales.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(fetchSales.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchSales.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export const {} = salesSlice.actions;
export default salesSlice.reducer;
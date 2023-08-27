import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isCartVisible: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleCart(state) {
            state.isCartVisible = !state.isCartVisible
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
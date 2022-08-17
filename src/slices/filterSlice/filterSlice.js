import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterTerm: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filterTerm = action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;

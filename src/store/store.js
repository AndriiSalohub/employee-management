import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "../slices/employeesSlice/employeesSlice";
import searchSlice from "../slices/searchSlice/searchSlice";

const store = configureStore({
    reducer: {
        employees: employeesSlice,
        search: searchSlice,
    },
});

export default store;

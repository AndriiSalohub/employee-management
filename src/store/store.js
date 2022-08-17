import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "../slices/employeesSlice/employeesSlice";
import filterSlice from "../slices/filterSlice/filterSlice";
import searchSlice from "../slices/searchSlice/searchSlice";

const store = configureStore({
    reducer: {
        employees: employeesSlice,
        search: searchSlice,
        filter: filterSlice,
    },
});

export default store;

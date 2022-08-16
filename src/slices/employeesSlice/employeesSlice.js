import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "@firebase/firestore";
import db from "../../firebase";

const employeesCollectionRef = collection(db, "employees");

export const getEmployees = createAsyncThunk(
    "employees/getEmployees",
    async (_, { rejectWithValue, dispatch }) => {
        const data = await getDocs(employeesCollectionRef);

        dispatch(
            setEmployees(
                data.docs.map((doc) => ({
                    ...doc.data(),
                    docId: doc.id,
                }))
            )
        );
    }
);

const initialState = {
    employees: [],
};

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        setEmployees: (state, action) => {
            state.employees = action.payload;
        },
        addEmployee: (state, action) => {
            state.employees = [...state.employees, action.payload];
        },
    },
    extraReducers: {
        [getEmployees.fulfilled.type]: () => console.log("fulfilled"),
        [getEmployees.pending.type]: () => console.log("pending"),
        [getEmployees.rejected.type]: () => console.log("rejected"),
    },
});

export const { setEmployees, addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;

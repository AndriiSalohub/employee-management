import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEmployees } from "../../slices/employeesSlice/employeesSlice";
import AddEmployee from "../../components/AddEmployee/AddEmployee";
import EmployeesList from "../../components/EmployeesList/EmployeesList";
import Filter from "../../components/Filter/Filter";
import Information from "../../components/Information/Information";
import Search from "../../components/Search/Search";
import "./App.scss";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmployees());
    }, []);

    return (
        <>
            <div className="app">
                <Information />

                <main className="main">
                    <Search />
                    <Filter />
                </main>

                <EmployeesList />

                <AddEmployee />
            </div>
        </>
    );
}

export default App;

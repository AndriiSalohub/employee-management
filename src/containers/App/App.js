import React from "react";
import EmployeesList from "../../components/EmployeesList/EmployeesList";
import Filter from "../../components/Filter/Filter";
import Information from "../../components/Information/Information";
import Search from "../../components/Search/Search";
import "./App.scss";

function App() {
    return (
        <>
            <div className="app">
                <Information />

                <main className="main">
                    <Search />
                    <Filter />
                </main>

                <EmployeesList />
            </div>
        </>
    );
}

export default App;

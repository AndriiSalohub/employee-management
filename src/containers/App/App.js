import React from "react";
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
                </main>
            </div>
        </>
    );
}

export default App;

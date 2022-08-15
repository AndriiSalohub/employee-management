import React from "react";
import "./Search.scss";

const Search = () => {
    return (
        <section className="search">
            <input
                type="text"
                className="search__input"
                placeholder="Найти сотрудника"
            />
        </section>
    );
};

export default Search;

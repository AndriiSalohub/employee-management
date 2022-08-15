import React from "react";
import "./Search.scss";

const Search = () => {
    return (
        <div className="search">
            <input
                type="text"
                className="search__input"
                placeholder="Найти сотрудника"
            />
        </div>
    );
};

export default Search;

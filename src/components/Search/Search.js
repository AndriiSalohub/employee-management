import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../slices/searchSlice/searchSlice";
import "./Search.scss";

const Search = () => {
    const dispatch = useDispatch();

    const handeleSearch = (e) => {
        dispatch(setSearch(e.target.value));
    };

    return (
        <section className="search">
            <input
                type="text"
                className="search__input"
                placeholder="Найти сотрудника"
                onChange={(e) => handeleSearch(e)}
            />
        </section>
    );
};

export default Search;

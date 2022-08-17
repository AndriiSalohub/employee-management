import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../slices/filterSlice/filterSlice";
import "./Filter.scss";

const Filter = () => {
    const dispatch = useDispatch();

    return (
        <section className="filter">
            <button
                className="filter__buttons filter__buttons_all-employees  filter__buttons_first-btn"
                onClick={() => dispatch(setFilter(""))}
            >
                Все сотрудникик
            </button>
            <button
                className="filter__buttons filter__buttons_for-promotion  filter__buttons_second-btn"
                onClick={() => dispatch(setFilter("rise"))}
            >
                На повышение
            </button>
            <button
                className="filter__buttons filter__buttons_salary-more-than-1000  filter__buttons_third-btn"
                onClick={() => dispatch(setFilter("moreThan1000"))}
            >
                З/П больше 1000$
            </button>
        </section>
    );
};

export default Filter;

import React from "react";
import "./Filter.scss";

const Filter = () => {
    return (
        <section className="filter">
            <button className="filter__buttons filter__buttons_all-employees  filter__buttons_first-btn">
                Все сотрудникик
            </button>
            <button className="filter__buttons filter__buttons_for-promotion  filter__buttons_second-btn">
                На повышение
            </button>
            <button className="filter__buttons filter__buttons_salary-more-than-1000  filter__buttons_third-btn">
                З/П больше 1000$
            </button>
        </section>
    );
};

export default Filter;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../slices/filterSlice/filterSlice";
import "./Filter.scss";

const Filter = () => {
    const [activeButton, setActiveButton] = useState("button1");

    const dispatch = useDispatch();

    return (
        <section className="filter">
            <button
                className={
                    activeButton === "button1"
                        ? "filter__buttons filter__buttons_all-employees  filter__buttons_first-btn active"
                        : "filter__buttons filter__buttons_all-employees  filter__buttons_first-btn"
                }
                onClick={() => {
                    dispatch(setFilter(""));
                    setActiveButton("button1");
                }}
            >
                Все сотрудникик
            </button>
            <button
                className={
                    activeButton === "button2"
                        ? "filter__buttons filter__buttons_for-promotion  filter__buttons_second-btn active"
                        : "filter__buttons filter__buttons_for-promotion  filter__buttons_second-btn"
                }
                onClick={() => {
                    dispatch(setFilter("rise"));
                    setActiveButton("button2");
                }}
            >
                На повышение
            </button>
            <button
                className={
                    activeButton === "button3"
                        ? "filter__buttons filter__buttons_salary-more-than-1000  filter__buttons_third-btn active"
                        : "filter__buttons filter__buttons_salary-more-than-1000  filter__buttons_third-btn"
                }
                onClick={() => {
                    dispatch(setFilter("moreThan1000"));
                    setActiveButton("button3");
                }}
            >
                З/П больше 1000$
            </button>
        </section>
    );
};

export default Filter;

import React from "react";
import { useSelector } from "react-redux";
import "./Information.scss";

const Information = () => {
    const employees = useSelector((state) => state.employees.employees);

    let employeesWithAward = 0;

    employees.forEach((element) => {
        if (element.award === true) {
            employeesWithAward += 1;
        }
    });

    return (
        <header className="information">
            <h1 className="information__title">
                Учет сотрудников в компании N
            </h1>
            <h2 className="information__amount-of-employees">
                Общее число сотрудников: {Object.keys(employees).length}
            </h2>
            <h2 className="information__on-award">
                Премию получать: {employeesWithAward}
            </h2>
        </header>
    );
};

export default Information;

import React from "react";
import { useSelector } from "react-redux";
import "./EmployeesList.scss";

const EmployeesList = () => {
    const employees = useSelector((state) => state.employees.employees);

    return (
        <div className="employees-list">
            {employees.map(({ id, fullName, salary, award }) => {
                return (
                    <EmployeesListItem
                        key={id}
                        fullName={fullName}
                        salary={salary}
                        award={award}
                    />
                );
            })}
        </div>
    );
};

const EmployeesListItem = ({ id, fullName, salary, award }) => (
    <div className="employees-list__item">
        <h2 className="employees-list__item__full-name">{fullName}</h2>
        <p className="employees-list__item__salary">{salary}$</p>
        <div className="employees-list__item__btn employees-list__item__btn_award">
            <img
                src="https://i.ibb.co/HF25Mns/cookie-4.png"
                alt="cake"
                className="employees-list__item__btn_award"
            />
        </div>
        <div className="employees-list__item__btn employees-list__item__btn_remove">
            <img
                src="https://i.ibb.co/3Ch35FZ/trash-can-3.png"
                alt="cake"
                className="employees-list__item__btn_remove"
            />
        </div>
    </div>
);

export default EmployeesList;

import React from "react";
import "./AddEmployee.scss";

const AddEmployee = () => {
    return (
        <footer className="add-employee">
            <h2 className="add-employee__title">Добавить нового сотрудника</h2>
            <form className="add-employee__form">
                <input
                    type="text"
                    className="add-employee__form__input add-employee__form__input_salary"
                    placeholder="Как его зовут?"
                />
                <input
                    type="number"
                    className="add-employee__form__input add-employee__form__input_salary"
                    placeholder="З/П в $"
                />
                <button className="add-employee__form__btn">Добавить</button>
            </form>
        </footer>
    );
};

export default AddEmployee;

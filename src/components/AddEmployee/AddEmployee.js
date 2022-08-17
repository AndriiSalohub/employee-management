import React, { useState } from "react";
import { collection, addDoc } from "@firebase/firestore";
import db from "../../firebase";
import "./AddEmployee.scss";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../slices/employeesSlice/employeesSlice";

const AddEmployee = () => {
    const [fullName, setFullName] = useState("");
    const [salary, setSalary] = useState(0);

    const [fullNameError, setFullNameError] = useState("");
    const [salaryError, setSalaryError] = useState("");

    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees.employees);

    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    };

    const handleFullNameError = (e) => {
        setFullName(e.target.value);
        const re = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setFullNameError("Имя и фамилия введены неверно");
        } else {
            setFullNameError("");
        }
    };

    const handleSalaryError = (e) => {
        setSalary(e.target.value);
        const re = /[0-9][1-9.]*[0-9]+[1-9]*/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setSalaryError("Зарплата введена неверно");
        } else {
            setSalaryError("");
        }
    };

    const handleAdd = async () => {
        const collectionRef = collection(db, "employees");
        const payload = {
            id: Object.keys(employees).length + 1,
            fullName: fullName,
            salary: salary,
            award: false,
        };
        const docRef = await addDoc(collectionRef, payload);
        const docId = docRef.id;
        dispatch(addEmployee({ ...payload, docId }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    };

    return (
        <footer className="add-employee">
            <h2 className="add-employee__title">Добавить нового сотрудника</h2>
            <form
                className="add-employee__form"
                onSubmit={(e) => handleSubmit(e)}
            >
                {fullNameError ? (
                    <p className="add-employee__error add-employee__full-name_error">
                        {fullNameError}
                    </p>
                ) : null}
                <input
                    type="text"
                    className="add-employee__form__input add-employee__form__input_salary"
                    placeholder="Как его зовут?"
                    onChange={(e) => handleFullNameError(e)}
                />
                {salaryError ? (
                    <p className="add-employee__error add-employee__salary_error">
                        {salaryError}
                    </p>
                ) : null}
                <input
                    type="number"
                    className="add-employee__form__input add-employee__form__input_salary"
                    placeholder="З/П в $"
                    onChange={(e) => handleSalaryError(e)}
                />
                <button
                    className="add-employee__form__btn"
                    onClick={() => handleAdd()}
                >
                    Добавить
                </button>
            </form>
        </footer>
    );
};

export default AddEmployee;

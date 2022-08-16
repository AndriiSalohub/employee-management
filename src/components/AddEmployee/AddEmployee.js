import React, { useState } from "react";
import { collection, addDoc } from "@firebase/firestore";
import db from "../../firebase";
import "./AddEmployee.scss";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../slices/employeesSlice/employeesSlice";

const AddEmployee = () => {
    const [fullName, setFullName] = useState("");
    const [salary, setSalary] = useState(0);

    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees.employees);

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };
    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
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
    };

    return (
        <footer className="add-employee">
            <h2 className="add-employee__title">Добавить нового сотрудника</h2>
            <form
                className="add-employee__form"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    type="text"
                    className="add-employee__form__input add-employee__form__input_salary"
                    placeholder="Как его зовут?"
                    onChange={(e) => handleFullNameChange(e)}
                />
                <input
                    type="number"
                    className="add-employee__form__input add-employee__form__input_salary"
                    placeholder="З/П в $"
                    onChange={(e) => handleSalaryChange(e)}
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

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doc, deleteDoc, setDoc } from "@firebase/firestore";
import {
    deleteEmployee,
    giveAward,
} from "../../slices/employeesSlice/employeesSlice";
import db from "../../firebase";
import "./EmployeesList.scss";

const EmployeesList = () => {
    const employees = useSelector((state) => state.employees.employees);

    return (
        <div className="employees-list">
            {employees.map(({ id, fullName, salary, award, docId }) => {
                return (
                    <EmployeesListItem
                        key={id}
                        id={id}
                        fullName={fullName}
                        salary={salary}
                        award={award}
                        docId={docId}
                    />
                );
            })}
        </div>
    );
};

const EmployeesListItem = ({ docId, fullName, salary, award, id }) => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees.employees);

    const handleDelete = async (docId) => {
        const docRef = doc(db, "employees", docId);
        deleteDoc(docRef);
        dispatch(deleteEmployee(docId));
    };

    const handleAward = async (docId, award, id) => {
        const docRef = doc(db, "employees", docId);
        const payload = { ...employees[id - 1], award: !award };
        await setDoc(docRef, payload);
        dispatch(giveAward(docId));
    };

    return (
        <div
            className={
                award ? "employees-list__item award" : "employees-list__item"
            }
        >
            <h2 className="employees-list__item__full-name">{fullName}</h2>
            <p className="employees-list__item__salary">{salary}$</p>
            <div
                className="employees-list__item__btn employees-list__item__btn_award"
                onClick={() => handleAward(docId, award, id)}
            >
                <img
                    src="https://i.ibb.co/HF25Mns/cookie-4.png"
                    alt="cake"
                    className="employees-list__item__btn_award"
                />
            </div>
            <div
                className="employees-list__item__btn employees-list__item__btn_remove"
                onClick={() => handleDelete(docId)}
            >
                <img
                    src="https://i.ibb.co/3Ch35FZ/trash-can-3.png"
                    alt="cake"
                    className="employees-list__item__btn_remove"
                />
            </div>
        </div>
    );
};

export default EmployeesList;

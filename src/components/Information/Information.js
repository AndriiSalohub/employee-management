import React from "react";
import "./Information.scss";

const Information = () => {
    return (
        <header className="information">
            <h1 className="information__title">
                Учет сотрудников в компании N
            </h1>
            <h2 className="information__amount-of-employees">
                Общее число сотрудников: 0
            </h2>
            <h2 className="information__on-award">Премию получать: 0</h2>
        </header>
    );
};

export default Information;

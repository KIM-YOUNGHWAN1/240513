import React from "react";
import './Template.css';

const Template = ({children, todoLength}) => {
    return (
        <div className="Temlate">
            <div className="title">今日のやり方 {todoLength}</div>
            <div>{children}</div>
        </div>
    );
};

export default Template;
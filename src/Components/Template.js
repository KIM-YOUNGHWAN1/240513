import React from "react";

const Template = ({children}) => {
    return (
        <div>
            <div>今日のやり方</div>
            <div>{children}</div>
        </div>
    );
};

export default Template;
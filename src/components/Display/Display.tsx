import React from "react";

export type DisplayType = {
    count: number,
    maxCount: number
}

export const Display: React.FC<DisplayType> = ({count, maxCount}) => {
    let redSpan = "red";
    return <div className="display">
        <span className={count === maxCount ? redSpan : ""}>{count}</span>
    </div>
}
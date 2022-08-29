import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type ButtonType = DefaultButtonPropsType & {
    callback: () => void
    currentDisabled: boolean
    className?: string
}

export const Button: React.FC<ButtonType> = ({callback, className, currentDisabled, ...restProps}) => {

    const finalClassName = `button ${className ? className : ""}`

    return (
        <button className={finalClassName} onClick={callback} disabled={currentDisabled} {...restProps}/>
    )
}
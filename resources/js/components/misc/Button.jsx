import React from "react";

export default function Button(props) {
    const {
        type = "default",
        className = "",
        processing,
        disabled,
        name,
        children,
    } = props;

    return (
        <button
            type={type}
            className={
                `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
            ${disabled && "opacity-25"}` + className
            }
            disabled={disabled}
            name={name}
            {...props}
        >
            {children}
        </button>
    );
}

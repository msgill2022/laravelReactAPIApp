import React from "react";

export default function Button(props) {
    const {
        type = "default",
        className = "",
        processing,
        name,
        children,
    } = props;

    return (
        <button
            type={type}
            className={
                `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
            ${processing && "opacity-25"}` + className
            }
            disabled={processing}
            name={name}
            {...props}
        >
            {children}
        </button>
    );
}

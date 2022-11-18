import React from "react";

export default function Alert(props) {
    const { type, message } = props;
    if (type === "success") {
        return (
            <div>
                <div className={`text-green-600`}>{message}</div>
            </div>
        );
    }
    return (
        <div>
            <div className={`text-red-600`}>{message}</div>
        </div>
    );
}

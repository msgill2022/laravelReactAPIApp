import React from "react";

export default function Alert(props) {
    const { err, message } = props;
    return (
        <div>
            <div className={`text-${err ? "red" : "green"}-600`}>
                {err && message}
            </div>
        </div>
    );
}

import React from "react";

export default function Greeting(props) {
    const { name, message } = props;
    return (
        <div>
            Hello, {name} {message}{" "}
        </div>
    );
}

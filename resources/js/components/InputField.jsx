import React from "react";
import Label from "./misc/Label";
import Input from "./misc/Input";

export default function InputField(props) {
    const {
        id = "",
        label = "",
        type = "text",
        value = "",
        name,
        onChange,
    } = props;

    return (
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
                <Label for={id}> {label} </Label>
            </div>
            <div className="md:w-2/3">
                <Input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    name={name}
                    {...props}
                />
            </div>
        </div>
    );
}

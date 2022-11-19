import React, { useState } from "react";
import Button from "../misc/Button";
import axios from "axios";

import Greeting from "../Greeting";
import { apiPrefix } from "../../config";
import {
    validLatitude,
    validLongitude,
    handleGeoCoordinateValidation,
} from "../../utils";
import Alert from "../Alert";

function PostLocationForm(props) {
    const { isLoggedIn, user } = props;

    const [currentInputLocation, setCurrentInputLocation] = useState({
        latitude: "38.8951",
        longitude: "-77.0364",
    });
    const [message, setMessage] = React.useState(() => ({
        latitude: { type: "", message: "" },
        longitude: { type: "", message: "" },
        message: "",
        type: "",
    }));

    const geoCoordinatesValidate = () => {
        return (
            validLatitude(currentInputLocation.latitude) &&
            validLongitude(currentInputLocation.longitude)
        );
    };

    const handleSubmitButton = () => {
        if (geoCoordinatesValidate) {
            let data = {
                latitude: parseFloat(currentInputLocation.latitude),
                longitude: parseFloat(currentInputLocation.longitude),
                user_id: user.id,
            };

            axios
                .post(`${apiPrefix}/users/${user.id}/locations`, data)
                .then((res) =>
                    setMessage((prev) => ({
                        ...prev,
                        type: "success",
                        message:
                            "Your Location is successfully saved on our server.",
                    }))
                )
                .then((err) => console.log(err));
        } else {
            handleErr();
        }
    };

    const handleErr = () => {
        setMessage((prev) => ({
            ...prev,
            type: "fail",
            message: "Something went wrong please try again.",
        }));
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setCurrentInputLocation((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        const newData = handleGeoCoordinateValidation(name, value);
        setMessage((prev) => ({
            ...prev,
            [name]: newData,
        }));
    };

    if (isLoggedIn) {
        return (
            <div>
                <Greeting
                    name={user.name}
                    message={
                        "Use following form to saved your current location"
                    }
                />
                <p>
                    {" "}
                    For example, Washington DC has a latitude 38.8951 and
                    longitude -77.0364.{" "}
                </p>
                <div className="mb-4">
                    <input
                        id="latitude"
                        type="text"
                        name="latitude"
                        value={currentInputLocation.latitude}
                        placeholder="latitude 38.8951"
                        onChange={handleOnChange}
                        required="required"
                        className="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3
                                 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {message.latitude && (
                        <Alert
                            type={message.type}
                            message={message.latitude.message}
                        />
                    )}

                    <div className="mb-4">
                        <input
                            id="Longitude"
                            label="Longitude"
                            type="text"
                            name="longitude"
                            value={currentInputLocation.longitude}
                            onChange={handleOnChange}
                            required="required"
                            className="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3
                                 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    {message.longitude && (
                        <Alert
                            type={message.type}
                            message={message.longitude.message}
                        />
                    )}

                    <div className="mb-4">
                        {message.type && (
                            <Alert
                                type={message.type}
                                message={message.message}
                            />
                        )}
                    </div>
                    <div className="mb-4">
                        <Button onClick={() => handleSubmitButton()}>
                            Submit Location
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
    return <div>{}</div>;
}

export default PostLocationForm;

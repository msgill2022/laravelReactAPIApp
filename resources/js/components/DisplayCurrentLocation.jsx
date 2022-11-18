import React from "react";

export default function DisplayCurrentLocation(props) {
    const { location } = props;

    if (location.id) {
        return (
            <div>
                <div>
                    {" "}
                    <span>Location Id: </span> <span> {location.id}</span>{" "}
                </div>
                <div>
                    <span>Location Latitude: </span>{" "}
                    <span> {location.latitude}</span>
                </div>
                <div>
                    <span>Location Longitude: </span>{" "}
                    <span> {location.longitude}</span>
                </div>
            </div>
        );
    }
    return <div>{}</div>;
}

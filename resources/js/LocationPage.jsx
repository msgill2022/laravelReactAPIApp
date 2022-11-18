import React from "react";

import PostLocationForm from "./components/Forms/PostLocationForm";

import { patternValidator, validDigitPattern } from "./utils";
import Input from "./components/misc/Input";
import Label from "./components/misc/Label";
import Button from "./components/misc/Button";

import { apiPrefix } from "./config";
import GetCurrentLocation from "./components/GetCurrentLocation";
import PageHeading from "./components/PageHeading";

function LocationPage() {
    const [userInput, setUserInput] = React.useState(1);
    const [user, setUser] = React.useState({ id: "", name: "", email: "" });
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [error, setError] = React.useState({
        status: false,
        type: "",
        message: "",
    });

    const userInputRef = React.useRef(1);

    const validUser = (value) => patternValidator(validDigitPattern, value);

    React.useEffect(() => {
        const userElement = userInputRef.current;

        const handleEvent = (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                getCurrentUser(userInput);
            }
        };
        userElement.addEventListener("keydown", handleEvent);
        return () => userElement.removeEventListener("keydown", handleEvent);
    }, []);

    const getCurrentUser = (userInput) => {
        if (validUser(userInput)) {
            setError((prevState) => ({
                ...prevState,
                status: false,
                message: "",
                type: "",
            }));
            axios
                .get(`${apiPrefix}/users/${userInput}`)
                .then((res) => handleSuccess(res.data.data))
                .catch((err) => handleError(err));
        }

        setError((prevState) => ({
            ...prevState,
            status: true,
            message: "please enter valid User id",
            type: "error",
        }));
    };

    const handleSuccess = ({ id, name, email }) => {
        setUser((prevState) => ({
            ...prevState,
            id,
            name,
            email,
        }));
        setError((prevState) => ({
            ...prevState,
            status: true,
            type: "success",
            message: "Data Save successfully!",
        }));

        setIsLoggedIn(true);
    };
    const handleOnChange = (e) => {
        setUserInput(e.target.value);
        if (!validUser) {
            setError((prev) => ({ ...prev, status: true }));
        }
        setError((prev) => ({ ...prev, status: false }));
    };

    const handleError = (err) => {
        setIsLoggedIn(false);

        console.log(err);
    };

    return (
        <div className="container mx-auto">
            <div className="mt-16">
                <PageHeading
                    heading="Current location"
                    description="we provide opportunity to save the location data on our server."
                />

                <div className="md:pl-xl max-w-xs">
                    <Label
                        for="user_id"
                        className="w-full text-gray-700 text-sm font-bold mb-2"
                    >
                        Enter Your User_Id
                    </Label>
                    <Input
                        id="user_id"
                        name="id"
                        type="number"
                        value={userInput}
                        innerref={userInputRef}
                        onChange={(e) => {
                            handleOnChange(e);
                        }}
                        required
                    />

                    <Button
                        type="submit"
                        name="submit"
                        onClick={() => getCurrentUser(userInput)}
                    >
                        Submit
                    </Button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24">
                <div className="relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left">
                    <GetCurrentLocation isLoggedIn={isLoggedIn} user={user} />
                </div>
                {/* Left container to get latest saved location end */}

                {/* Right container to save location start */}
                <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
                    {/* Form to save location Section start*/}
                    <div className="">
                        <PostLocationForm isLoggedIn={isLoggedIn} user={user} />
                    </div>
                    {/* Form to the get latest save location Section end*/}
                </div>
                {/* Right container to saved location end */}
            </div>
            {/* Two column Container end */}
        </div>
    );
}

export default LocationPage;

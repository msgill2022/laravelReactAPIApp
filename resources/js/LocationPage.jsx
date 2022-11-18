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
    const [userInput, setUserInput] = React.useState(() => 1);
    const [user, setUser] = React.useState();
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [err, setErr] = React.useState(() => ({
        status: false,
        type: "",
        message: "",
    }));

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
            axios
                .get(`${apiPrefix}/users/${userInput}`)
                .then((res) => handleSuccess(res.data.data))
                .catch((err) => handleError(err));
        }
    };

    const handleSuccess = ({ id, name, email }) => {
        setUser((prevState) => ({
            ...prevState,
            id,
            name,
            email,
        }));

        setIsLoggedIn(true);
    };

    const handleOnChange = (e) => {
        setUserInput(e.target.value);
        if (!validUser) {
            setErr((prev) => ({ ...prev, status: true }));
        }
        setErr((prev) => ({ ...prev, status: false }));
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

                <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
                    <PostLocationForm isLoggedIn={isLoggedIn} user={user} />
                </div>
            </div>
        </div>
    );
}

export default LocationPage;

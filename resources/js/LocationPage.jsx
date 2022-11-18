import React from "react";

import PostLocationForm from "./components/Forms/PostLocationForm";

import { validUser } from "./utils";
import Input from "./components/misc/Input";
import Label from "./components/misc/Label";
import Button from "./components/misc/Button";
import Alert from "./components/Alert";
import { apiPrefix } from "./config";
import GetCurrentLocation from "./components/GetCurrentLocation";
import PageHeading from "./components/PageHeading";

function LocationPage() {
    const [userInput, setUserInput] = React.useState(1);
    const [user, setUser] = React.useState();
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [message, setMessage] = React.useState(() => "");
    const [err, setErr] = React.useState(() => true);

    // const userInputRef = React.useRef(1);

    // React.useEffect(() => {
    //     const userElement = userInputRef.current;

    //     const handleEvent = (event) => {
    //         if (event.key === "Enter") {
    //             event.preventDefault();
    //             getCurrentUser(userInput);
    //         }
    //     };
    //     userElement.addEventListener("keydown", handleEvent);
    //     return () => userElement.removeEventListener("keydown", handleEvent);
    // }, []);

    const handleSubmitButton = () => {
        if (validUser(userInput)) {
            fetchCurrentUser(userInput);
        } else {
            handleError();
        }
    };
    const fetchCurrentUser = (userInput) => {
        axios
            .get(`${apiPrefix}/users/${userInput}`)
            .then((res) => handleSuccess(res.data.data))
            .catch((err) => handleError(err));
    };

    const handleSuccess = ({ id, name, email }) => {
        setUser((prevState) => ({
            ...prevState,
            id,
            name,
            email,
        }));

        setIsLoggedIn(true);

        setMessage("you successfully logged in");
    };

    const handleError = () => {
        setErr((prev) => (prev = true));
        setIsLoggedIn(false);
        setMessage((prev) => (prev = "Something went wrong try again"));
    };

    const handleOnChange = (event) => {
        setUserInput((prev) => (prev = event.target.value));
        if (!validUser(event.target.value)) {
            setMessage((prev) => (prev = "Please enter the valid User id"));
        }
        if (validUser(event.target.value)) {
            setMessage((prev) => (prev = ""));
        }
    };
    return (
        <div className="container mx-auto">
            <div className="mt-16">
                <PageHeading
                    heading="Current location"
                    description="we provide opportunity to save the location data on our server."
                />

                <div className="grid place-items-center">
                    <input
                        id="user_id"
                        name="id"
                        type="text"
                        placeholder="Your User id"
                        value={userInput}
                        // innerref={userInputRef}
                        onChange={handleOnChange}
                        required="required"
                        className="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="mb-4">
                        <Alert err={err} message={message} />
                        {/* <div className="text-red-600">{err && message}</div> */}
                    </div>
                    <div className="mb-4">
                        <Button onClick={() => handleSubmitButton()}>
                            Submit
                        </Button>
                    </div>
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

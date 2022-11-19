export const validLatitudePattern =
    /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
export const validLongitudePattern =
    /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;
export const validDigitPattern = /[0-9]/;

export const validUser = (num) => {
    return !isNaN(num);
};
export const patternValidator = (pattern) => (value) => pattern.test(value);

export const validLatitude = patternValidator(validLatitudePattern);
export const validLongitude = patternValidator(validLongitudePattern);

export const getMetaData = (attr, val) => {
    try {
        return document.querySelector(`[${attr}=${val}]`).content;
    } catch (error) {
        error.message("wrong attribute and value");
    }
};

export const handleGeoCoordinateValidation = (name = "latitude", val) => {
    if (
        !(
            name.toLowerCase() === "latitude" ||
            name.toLowerCase() === "longitude"
        )
    ) {
        throw Error("must be either latitude and longitude string.");
    }
    if (name.toLocaleLowerCase() === "latitude") {
        if (!validLatitude(val)) {
            return {
                type: "error",
                message: "Please enter valid latitude.",
            };
        }
    }
    if (name.toLocaleLowerCase() === "longitude") {
        if (!validLongitude(val)) {
            return {
                type: "error",
                message: "Please enter valid longitude.",
            };
        }
    }

    return { type: "", message: "" };
};

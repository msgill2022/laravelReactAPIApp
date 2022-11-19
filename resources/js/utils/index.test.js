import {
    validLatitude,
    validLongitude,
    handleGeoCoordinateValidation,
} from "./index";

// valid latitude 49.528526 and long -96.691093.

// describe("tests patternValidator function", () => {
//     test("should return false for invalid latitude", () => {
//         expect(validLatitude("invalid")).toBe(false);
//     });
//     test("should return true for valid latitude", () => {
//         expect(validLatitude("49.528526")).toBe(true);
//     });

//     test("should return false for invalid latitude", () => {
//         expect(validLatitude("-96.691093")).toBe(false);
//     });

//     test("should return false for invalid latitude", () => {
//         expect(validLongitude("invalid")).toBe(false);
//     });
//     test("should return true for valid latitude", () => {
//         expect(validLongitude("-96.691093")).toBe(true);
//     });
//     test("should return true for valid latitude", () => {
//         expect(validLongitude("-186.528526")).toBe(false);
//     });
// });

describe("test handleGoeCoordinationValidation function", () => {
    test("should throw error if it not latitude and longitude", () => {
        try {
            handleGeoCoordinateValidation("", "");
            expect(true).toBe(false);
        } catch (error) {
            expect(error.message).toBe(
                "must be either latitude and longitude string."
            );
        }
    });
    test("should return the object type:error, message:'Please ..' for longitude coordinates", () => {
        expect(
            handleGeoCoordinateValidation("latitude", "invalid")
        ).toMatchObject({
            type: "error",
            message: "Please enter valid latitude.",
        });
    });
    test("should return the object type:error, message:'Please...' for longitude coordinates", () => {
        expect(
            handleGeoCoordinateValidation("longitude", "invalid")
        ).toMatchObject({
            type: "error",
            message: "Please enter valid longitude.",
        });
    });
    test("should return the object type:empty, message:empty for latitude coordinates", () => {
        expect(
            handleGeoCoordinateValidation("latitude", "49.528526")
        ).toMatchObject({
            type: "",
            message: "",
        });
    });
    test("should return the object type:empty, message:empty for longitude coordinates", () => {
        expect(
            handleGeoCoordinateValidation("longitude", "-96.691093")
        ).toMatchObject({
            type: "",
            message: "",
        });
    });
});

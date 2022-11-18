import React from "react";
import { createRoot } from "react-dom/client";
import LocationPage from "./LocationPage";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <LocationPage />
    </React.StrictMode>
);

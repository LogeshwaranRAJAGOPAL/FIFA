import React from "react";
import "../css/Loader.css"
import { CircularProgress } from "@mui/material";

function Loader() {
    return(
    <div className="Loader">
        <CircularProgress color="success" className="progress"/>
    </div>)
}

export default Loader;

import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../navBar/NavBar";

const Root = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <ScrollRestoration />
        </>
    )
};

export default Root;

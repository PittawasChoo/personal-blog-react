import React from "react";

import Navbar from "components/Navbar";

import Banner from "./Banner";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <div style={{ height: "100vh", backgroundColor: "red" }} />
        </div>
    );
};

export default Main;

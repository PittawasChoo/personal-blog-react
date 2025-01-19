import React from "react";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

import Banner from "./Banner";
import Banner2 from "./Banner2";
import Marquee from "./Marquee";
import Trending from "./Trending";
import Carousel from "./Carousel";

const Main = () => {
    return (
        <div style={{ backgroundColor: "white" }}>
            <Navbar />
            <Banner />
            <Marquee />

            <div style={{ padding: "120px 50px 120px 50px", width: "1400px", margin: "0 auto" }}>
                <Trending />
            </div>

            <Carousel header="NEW ARRIVAL" />

            <div style={{ marginTop: "120px", marginBottom: "120px" }}>
                <Marquee />
                <Banner2 />
                <Marquee reverse />
            </div>

            <Carousel header="PROMOTION" />
            <div style={{ marginTop: "80px" }} />
            <Footer />
        </div>
    );
};

export default Main;

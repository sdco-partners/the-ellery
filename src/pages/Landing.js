import React from "react";
import Header from "../components/Header";
import Content from "../components/CenteredContent";
import Footer from "../components/Footer";

export default function Landing () {
    return (
        <>
            <div className="landing wrapper">
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        </>
    )
}
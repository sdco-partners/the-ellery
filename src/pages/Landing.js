import React from "react";
import Header from "../components/Header";
import Content from "../components/CenteredContent";
import Footer from "../components/Footer";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function Landing () {
    return (
        <>
            <div className="landing wrapper">
                <FadeIn delay={500} transitionDuration={800}>
                    <Header></Header>
                </FadeIn>
                <FadeIn delay={1200} transitionDuration={1800}>
                    <Content></Content>
                </FadeIn>
                <FadeIn delay={700} transitionDuration={1000}>
                    <Footer></Footer>
                </FadeIn>
            </div>
        </>
    )
}
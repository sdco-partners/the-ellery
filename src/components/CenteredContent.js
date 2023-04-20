import React from "react";
import { ReactComponent as Logo} from "../assets/graphics/Ellery_AltLogo_01.svg";

export default function Content () {
    return (
        <div className="centered-content">
            <div className="centered-content__logo">
                <Logo></Logo>
            </div>
            <div className="centered-content__vertical-rule"></div>
            <div className="centered-content__headline">
                <h2>
                    <span className="h2__serif">Coming </span>
                    <span className="h2__sans">soon,</span>
                </h2>
                <h2>
                    <span className="h2__sans">Leasing </span>
                    <span className="h2__serif">this Fall</span>
                </h2>
            </div>
        </div>
    )
}
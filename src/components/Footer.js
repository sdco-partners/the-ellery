import { ReactComponent as EqualHousing} from "../assets/graphics/EQUAL_HOUSING.svg";
import { ReactComponent as Accessibility } from "../assets/graphics/ACCESSIBILITY.svg";

export default function Footer () {
    return (
        <div className="footer">
            <EqualHousing></EqualHousing>
            <div className="footer__copy">
                <p className="footer__copy__email h3__sans">info@theellery.com</p>
                <div className="footer__address">
                    <p className="footer__copy__address h3__sans">294 Amarillo Road<br></br>Grand Prairie, Texas 293821</p>
                </div>
                <p className="footer__copy__phone h3__sans">800-009-0009</p>
            </div>
            <Accessibility></Accessibility>
        </div>
    )
}
import { ReactComponent as EqualHousing} from "../assets/graphics/EQUAL_HOUSING.svg";
import { ReactComponent as Accessibility } from "../assets/graphics/ACCESSIBILITY.svg";

export default function Footer () {
    return (
        <div className="footer">
            <div className="footer__graphic">
                <EqualHousing></EqualHousing>
            </div>
            <p className="footer__copy">info@theellery.com</p>
            <div className="footer__address">
                <p className="footer__copy">294 Amarillo Road<br></br>Grand Prairie, Texas 293821</p>
            </div>
            <p className="footer__copy">800-009-0009</p>
            <div className="footer__graphic">
                <Accessibility></Accessibility>
            </div>
        </div>
    )
}
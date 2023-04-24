import { ReactComponent as EqualHousing} from "../assets/graphics/EQUAL_HOUSING.svg";
import { ReactComponent as Accessibility } from "../assets/graphics/ACCESSIBILITY.svg";

export default function Footer () {
    return (
        <div className="footer">
            <EqualHousing></EqualHousing>
            <div className="footer__copy">
                <p className="footer__copy__email h3__sans">info@theellery.com</p>
                <div className="footer__address">
                    <p className="footer__copy__address h3__sans">4210 Dechman Drive<br></br>Grand Prairie, Texas 75052</p>
                </div>
                <p className="footer__copy__phone h3__sans">469.361.4424</p>
            </div>
            <Accessibility></Accessibility>
        </div>
    )
}
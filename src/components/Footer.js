import { ReactComponent as EqualHousing} from "../assets/graphics/EQUAL_HOUSING.svg";
import { ReactComponent as Accessibility } from "../assets/graphics/ACCESSIBILITY.svg";

export default function Footer () {
    return (
        <div className="footer">
            <EqualHousing></EqualHousing>
            <div className="footer__copy">
                <a href="mailto:info@theellery.com" className="footer__copy__email h3__sans">info@theellery.com</a>
                <div className="footer__address">
                    <a href="https://goo.gl/maps/6epqhs1nvvw3dYnx9" target="_blank" rel="noreferrer">
                        <p className="footer__copy__address h3__sans">4210 Dechman Drive<br></br>Grand Prairie, Texas 75052</p>
                    </a>
                </div>
                <p className="footer__copy__phone h3__sans">469.361.4424</p>
            </div>
            <Accessibility></Accessibility>
        </div>
    )
}
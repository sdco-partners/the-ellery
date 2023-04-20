import { ReactComponent as Sunrise } from "../assets/graphics/SUNRISE.svg";

export default function Header () {
    return (
        <div className="header">
            <p className="header__copy h1__serif">Inviting Energy</p>
            <div className="header__rule"></div>
            <Sunrise></Sunrise>
        </div>
    )
}
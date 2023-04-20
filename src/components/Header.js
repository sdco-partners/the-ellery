import { ReactComponent as Sunrise } from "../assets/graphics/SUNRISE.svg";

export default function Header () {
    return (
        <div className="header">
            <p className="header__copy">Inviting Energy</p>
            <div className="header__rule">Horizontal Line</div>
            <Sunrise></Sunrise>
        </div>
    )
}
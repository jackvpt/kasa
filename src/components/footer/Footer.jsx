import "./Footer.scss";
import logo from "../../assets/images/logo_kasa_white.png"

function Body() {
    return (
        <footer>
            <img
                src={logo}
                alt="logo kasa"
            ></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>

    );
}

export default Body;
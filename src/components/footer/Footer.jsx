import "./Footer.scss";

function Body() {
    return (
        <footer>
            <img
                src={require("./../../images/logo_kasa_white.png")}
                alt="logo kasa"
            ></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>

    );
}

export default Body;
import imgLogo from "../images/RickandMorty.png";
import "../styles/layout/Header.scss";

const Header = () => {
    return (
        <>
            <header className="header">
                <img
                    className="header__imageLogo"
                    src={imgLogo}
                    alt="Imagen Rick and Morty"
                />
                <h1 className="header__title">
                    Welcome to Rick & Morty Search browser
                </h1>
            </header>
        </>
    );
};

export default Header;

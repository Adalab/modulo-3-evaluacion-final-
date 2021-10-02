import imgLogo from '../images/RickandMorty.png';
import '../styles/layout/Header.scss';

const Header = () => {

    return (
        <><header><img className='imageLogo' src={imgLogo} alt="Imagen Rick and Morty" />
            <h1>Welcome to Rick & Morty Search  browser </h1> </header>
        </>);
}

export default Header;
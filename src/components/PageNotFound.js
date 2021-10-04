import { Link } from "react-router-dom";
import '../styles/layout/NotFound.scss';
import imgNotFound from "../images/notFound2.PNG";


const PageNotFound = () => {
    return (
        <>
            <section className='wrapperNotFound'>

                <img
                    className="wrapperNotFound__img"
                    src={imgNotFound}
                    alt="notFound"
                />                <Link to="/" className='wrapperNotFound__returnText'>
                    <i class="fas fa-hand-point-left"></i>  Return to homepage
                </Link></section>
        </>
    );
};

export default PageNotFound;

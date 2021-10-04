import { Link } from "react-router-dom";
import '../styles/layout/NotFound.scss';

const PageNotFound = () => {
    return (
        <>
            <section className='wrapperNotFound'>
                <p className='wrapperNotFound__errorText'>PAGE NOT FOUND</p>

                <Link to="/" className='wrapperNotFound__returnText'>
                    <i class="fas fa-hand-point-left"></i>  Return to homepage
                </Link></section>
        </>
    );
};

export default PageNotFound;

import { Link } from "react-router-dom";
import '../styles/layout/NotFound.scss';

const CharNotFound = () => {
    return (<>
        <section className='wrapperNotFound'>
            <p className='wrapperNotFound__errorText'>CHARACTER NOT FOUND</p>
            <p>Type new name again </p>
        </section>
    </>);
}

export default CharNotFound;
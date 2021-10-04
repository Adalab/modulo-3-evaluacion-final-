import { Link } from "react-router-dom";
import RenderCharDetails from "./RenderCharDetails";
import '../styles/layout/RenderCharList.scss';
import CharNotFound from "./CharNotFound";

const RenderCharList = (props) => {
    // esta condicional nos indica que hacer si el nb q escribe la usuaria no coincide con lo que hay en el array, pinta char not found
    if (props.data.length === 0) {
        return <CharNotFound />
        //si el char esta en lal ista lo pinta 
    } else {
        const listHtml = props.data
            .map((char, index) => (
                <li key={char.id} className="wrapper__listChar">
                    <Link to={`/character/${char.id}`} className='mainWrapper__link'>
                        <RenderCharDetails char={char} />
                    </Link>
                </li>
            ))


        return <section className='mainWrapper'> <ul className='wrapper'> {listHtml}</ul></section>;
    }
};


export default RenderCharList;

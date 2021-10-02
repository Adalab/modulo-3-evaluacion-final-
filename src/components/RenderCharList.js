import { Link } from "react-router-dom";
import RenderCharDetails from "./RenderCharDetails";
import '../styles/layout/CharList.scss';

const RenderCharList = (props) => {
    const listHtml = props.data.map((char, index) => (
        <li key={char.id} className="wrapper__listChar">
            <Link to={`/character/${char.id}`} className='mainWrapper__link'>
                <RenderCharDetails char={char} />
            </Link>
        </li>
    ));

    return <section className='mainWrapper'> <ul className='wrapper'> {listHtml}</ul></section>;
};


export default RenderCharList;

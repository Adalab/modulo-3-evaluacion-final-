import { Link } from "react-router-dom";
import RenderCharDetails from "./RenderCharDetails";

const RenderCharList = (props) => {
    const listHtml = props.data.map((char, index) => (
        <li key={char.id} className="container__listChar">
            <Link to={`/character/${char.id}`}>
                <RenderCharDetails char={char} />
            </Link>
        </li>
    ));

    return <ul className='container'> {listHtml}</ul>;
};


export default RenderCharList;

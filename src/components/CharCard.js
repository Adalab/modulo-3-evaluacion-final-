import { Link } from "react-router-dom";

const CharCard = (props) => {
    function enterNum() {
        let acc = 0;
        let episode = props.char.episode;
        for (let i = 0; i < episode.length; i++) {
            acc = i + 1;
        }
        return acc;
    }

    if (props.char === undefined) {
        return (
            <>
                <p> PAGE NOT FOUND</p>
                <Link to="/">
                    <h3>Return to homepage</h3>
                </Link>
            </>
        );
    } else {
        return (
            <>
                <section>
                    <Link to="/">
                        <h3>Volver</h3>
                    </Link>
                    <div>
                        <img
                            className="container__listChar--imageChar"
                            src={props.char.image}
                            alt={props.char.name}
                        />
                        <p> Name: {props.char.name}</p>
                        <p>Specie: {props.char.species}</p>
                        <p>Status: {props.char.status}</p>
                        <p>Origin: {props.char.origin}</p>
                        <p>episodes: {enterNum()}</p>
                    </div>
                </section>
            </>
        );
    }
};

export default CharCard;

import { Link } from "react-router-dom";
import "../styles/layout/CharCard.scss";
import PageNotFound from "./PageNotFound";

const CharCard = (props) => {
    function changeStatus() {
        const status = props.char.status;
        if (status === "Alive") {
            return (
                <p>

                    Status: <i class="fab fa-reddit-alien"></i>
                </p>
            );
        } else if (status === "Dead") {
            return (
                <p>

                    Status: <i class="fas fa-skull-crossbones"></i>
                </p>
            );
        } else {
            return (
                <p>

                    Status: <i class="far fa-question-circle"></i>
                </p>
            );
        }
    }

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
                <PageNotFound />
            </>
        );
    } else {
        return (
            <>
                <section className="wrapperCharCard">
                    <div className="wrapperCharCard__link">
                        <Link to="/" className="wrapperCharCard__link--text">
                            Volver
                        </Link>
                    </div>

                    <div className="wrapperCharCard__description">
                        <img
                            className="wrapperCharCard__description--img"
                            src={props.char.image}
                            alt={props.char.name}
                        />
                        <ul className="wrapperCharCard__description--listChar">
                            <li> Name: {props.char.name}</li>
                            <li> Specie: {props.char.species}</li>
                            <li> Origin: {props.char.origin}</li>
                            <li> episodes: {enterNum()}</li>
                            <li> {changeStatus()} </li>
                        </ul>
                    </div>
                </section>
            </>
        );
    }
};

export default CharCard;

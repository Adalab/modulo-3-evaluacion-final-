
const RenderCharDetails = (props) => {
    return (
        <> <img className="container__listChar--imageChar" src={props.char.image} alt={props.char.name} />
            <div className="container__listChar--styleChar">
                <p> Name: {props.char.name}</p>
                <p>Specie: {props.char.species}</p>
            </div>
        </>
    );
};


export default RenderCharDetails;

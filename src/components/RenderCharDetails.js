
const RenderCharDetails = (props) => {
    return (
        <>
            <div className="wrapper__listChar--wrap">
                <img className="wrapper__listChar--imageChar" src={props.char.image} alt={props.char.name} />

                <div className="wrapper__listChar--styleContent">
                    <p className="wrapper__listChar--textName"> <strong>Name</strong>: {props.char.name}</p>
                    <p className="wrapper__listChar--textSpecie"><strong>Specie</strong>: {props.char.species}</p>
                </div> </div>
        </>
    );
};


export default RenderCharDetails;

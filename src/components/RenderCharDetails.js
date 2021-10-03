const RenderCharDetails = (props) => {
    return (
        <>
            <div className="wrapper__listChar--wrap">
                <img
                    className="wrapper__listChar--imageChar"
                    src={props.char.image}
                    alt={props.char.name}
                />
                <div className="wrapper__listChar--styleContent">
                    <p className="wrapper__listChar--textName">

                        Name: <strong>{props.char.name}</strong>
                    </p>
                    <p className="wrapper__listChar--textSpecie">
                        Specie: <strong>{props.char.species}</strong>
                    </p>
                </div>
            </div>
        </>
    );
};

export default RenderCharDetails;

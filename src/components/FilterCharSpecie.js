const FilterCharSpecie = (props) => {
    return (
        <>
            <label htmlFor="species">Select species here</label>
            <select className='form__searchSpecies'
                name="species"
                id="species"
                value={props.selectSepecies}
                onChange={props.handleSelect}
            >
                <option value="All">All</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
            </select>
        </>
    );
};

export default FilterCharSpecie;

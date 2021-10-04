const FilterCharSpecie = (props) => {
    const changeHandleSelect = (ev) => {
        props.handleSelect(ev.currentTarget.value)
    }
    return (
        <>
            <label htmlFor="species" className='form__labelText'>Select species here</label>
            <select className='form__searchSpecies'
                name="species"
                id="species"
                value={props.selectSepecies}
                onChange={changeHandleSelect}
            >
                <option value="All">All</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
            </select>
        </>
    );
};

export default FilterCharSpecie;

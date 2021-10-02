import FilterCharName from "./FilterCharName";
import FilterCharSpecie from "./FilterCharSpecie";
import '../styles/layout/Form.scss';

const Filters = (props) => {
    return (
        <form className="form">
            <FilterCharName
                searchName={props.searchName}
                handleSearchName={props.handleSearchName}
                labelText='Type name here'
                type="text"
                name="name"
                id="name"
            />
            <FilterCharSpecie
                selectSpecies={props.selectSepecies}
                handleSelect={props.handleSelect}
            />
        </form>
    );
};

export default Filters;

import PropTypes from 'prop-types';

const FilterCharName = (props) => {
    return (
        <>
            <label htmlFor={props.id}>{props.labelText}</label>
            <input className='form__searchName'
                type={props.type}
                name={props.name}
                id={props.id}
                value={props.searchName}
                onChange={props.handleSearchName}
            />
        </>
    );
};


FilterCharName.defaultProps = {
    type: 'text'
};

FilterCharName.propTypes = {
    labelText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    handleSearchName: PropTypes.func.isRequired
};

export default FilterCharName;

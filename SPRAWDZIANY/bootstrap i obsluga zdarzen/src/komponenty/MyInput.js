import {PropTypes} from "prop-types";

const MyInput = props => {
    const { type, label, name, value, className, onChange, onBlur } = props;
    return (
        <div>
            <label htmlFor={name}>{label}: </label>
            <input 
                name={name}
                id={name}
                type={type}
                value={value}
                className={className}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    )
}

MyInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
}

export default MyInput;
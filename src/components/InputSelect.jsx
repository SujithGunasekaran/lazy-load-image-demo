import PropTypes from 'prop-types';

const Select = (props) => {

  // props
  const {
    label,
    name,
    description,
    options,
    value,
    onChange
  } = props;

  return (
    <>
      <label
        htmlFor={name}
        className='input-label'
      >
        {label}
      </label>
      <p className='input-description'>{description}</p>
      <select
        onChange={onChange}
        className='select-input'
        name={name}
        id={name}
        value={value}
      >
        {
          options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))
        }
      </select>
    </>
  )

}

Select.prototype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  description: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;

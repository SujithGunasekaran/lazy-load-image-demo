import PropTypes from 'prop-types';

const InputText = (props) => {

  // props
  const {
    label,
    name,
    description,
    onChange,
    value,
  } = props;

  return (
    <>
      <label
        htmlFor={name}
        className='input-label'
      >
        {label}
      </label>
      {
        description && <p className='input-description'>{description}</p>
      }
      <input
        type='text'
        onChange={onChange}
        className='text-input'
        name={name}
        id={name}
        value={value}
      />
    </>
  )

}

InputText.prototype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputText;

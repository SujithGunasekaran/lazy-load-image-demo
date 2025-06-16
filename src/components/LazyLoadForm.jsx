import PropTypes from 'prop-types';
import InputSelect from './InputSelect';
import InputText from './InputText';
import {
  selectFields,
  textFields
} from '../constant';

const LazyLoadForm = (props) => {

  // props
  const {
    handleSelectChange,
    handleTextChange,
    formData
  } = props;

  return (
    <form
      className='lazy-load-form-container'
    >
      <div className='title'>Lazy Load Image</div>
      {
        selectFields.map((field) => (
          <div className='select-field' key={field.name}>
            <InputSelect
              label={field.label}
              name={field.name}
              description={field.description}
              options={field.options}
              value={formData[field.name]}
              onChange={handleSelectChange}
            />
          </div>
        ))
      }
      {
        textFields.map((field) => (
          <div className='text-field' key={field.name}>
            <InputText
              label={field.label}
              name={field.name}
              description={field.description}
              value={formData[field.name]}
              onChange={handleTextChange}
            />
          </div>
        ))
      }
    </form>
  )

}

LazyLoadForm.propTypes = {
  handleSelectChange: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default LazyLoadForm;

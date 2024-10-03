import PropTypes from 'prop-types';
import cartagena from '../assets/imgs/cartagena.jpg';

export const Cartagena = ( {className} ) => {
  return (
    <img src={cartagena} alt="cartagena" className= {className} />    
  )
}

Cartagena.propTypes = {
    className: PropTypes.string
}
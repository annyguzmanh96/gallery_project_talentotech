import PropTypes from 'prop-types';
import valledupar from '../assets/imgs/valledupar.jpg';

export const Valledupar = ( {className} ) => {
  return (
    <img src={valledupar} alt="valledupar" className= {className} />    
  )
}

Valledupar.propTypes = {
    className: PropTypes.string
}
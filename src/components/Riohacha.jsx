import PropTypes from 'prop-types';
import riohacha from '../assets/imgs/riohacha.jpg';

export const Riohacha = ( {className} ) => {
  return (
    <img src={riohacha} alt="riohacha" className= {className} />    
  )
}

Riohacha.propTypes = {
    className: PropTypes.string
}
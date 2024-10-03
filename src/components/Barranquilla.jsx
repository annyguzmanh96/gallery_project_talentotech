import PropTypes from 'prop-types';
import barranquilla from '../assets/imgs/barranquilla.jpg';

export const Barranquilla = ( {className} ) => {
  return (
    <img src={barranquilla} alt="barranquilla" className= {className} />    
  )
}

Barranquilla.propTypes = {
    className: PropTypes.string
}
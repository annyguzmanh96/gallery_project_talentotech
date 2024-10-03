import PropTypes from 'prop-types';
import santaMarta from '../assets/imgs/santaMarta.jpg';

export const SantaMarta = ( {className} ) => {
  return (
    <img src={santaMarta} alt="santaMarta" className= {className} />    
  )
}

SantaMarta.propTypes = {
    className: PropTypes.string
}
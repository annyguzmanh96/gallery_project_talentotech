import PropTypes from 'prop-types';

export const Image = ({ className, img }) => {
  return (
    <img src={img.src} alt={img.alt} className={className} />
  );
};

Colombia1.propTypes = {
  className: PropTypes.string,
};
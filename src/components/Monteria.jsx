import PropTypes from "prop-types";
import monteria from "../assets/imgs/monteria.jpg";

export const Monteria = ({ className }) => {
  return <img src={monteria} alt="monteria" className={className} />;
};

Monteria.propTypes = {
  className: PropTypes.string,
};

import PropTypes from "prop-types";

const ErrorMsg = ({ foodItems }) => {
  return <div>{foodItems.length === 0 && <h3>I am still hungry</h3>}</div>;
};

ErrorMsg.propTypes = {
  foodItems: PropTypes.array.isRequired,
};

export default ErrorMsg;

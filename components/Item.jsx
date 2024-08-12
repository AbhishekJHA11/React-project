import PropTypes from "prop-types";

const Item = (props) => {
  console.log(props,"gooooood");
  return <li className="list-group-item ab-item">{props.foodItem}</li>;
};

Item.propTypes = {
  foodItem: PropTypes.array.isRequired,
};

export default Item;

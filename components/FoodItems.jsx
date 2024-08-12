import PropTypes from "prop-types";


import Item from "./Item";

const FoodItems = ({ foodItems }) => {
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item) => (
          <Item key={item} foodItem={item} />
        ))}
      </ul>
    </>
  );
};

FoodItems.propTypes = {
  foodItems: PropTypes.array.isRequired,
};

export default FoodItems;

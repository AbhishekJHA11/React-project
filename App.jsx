import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";

const App = () => {
  const foodItems = ["Dal", "Green vegetables", "Roti", "Salad", "Milk"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMsg items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
};

export default App;

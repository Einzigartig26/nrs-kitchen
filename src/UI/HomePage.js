import "./HomePage.css";
import Header from "./Header";
import WallPaper from "./WallPaper";
import Card from "../Meals/Card";
import { useEffect } from "react";
import Buffer from "./Buffer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMeals } from "../redux";

function HomePage() {
  // const [availableMeals, setAvailableMeals] = useState([]);
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals.meals);
  const meal = useSelector((state) => state.meal);
  const availableMeals = [];

  useEffect(() => {
    // dispatch(fetchCartMeals(dispatch));
  }, [dispatch]);

  const mealList = meals.map((item, index) => {
    if (index === availableMeals.length - 1) {
      return <Card key={item._id} item={item} index={index} />;
    } else {
      return <Card key={item._id} item={item} />;
    }
  });

  return (
    <div className="HomePage">
      <Header />
      <WallPaper />
      <div className="bottom">
        <div className="menu-container">
          {meal.loading ? <Buffer /> : mealList}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

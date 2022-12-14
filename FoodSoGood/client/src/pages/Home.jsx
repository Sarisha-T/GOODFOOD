import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //dispatch actions
import Foodcards from "../components/Foodcards";
import { getALLFoods } from "../actions/foodActions";

function Home() {
  const dispatch = useDispatch();
  const foodstate = useSelector((state) => state.getALLFoodsReducer);

  const { foods, err, loading } = foodstate;

  //object
  useEffect(() => {
    dispatch(getALLFoods());
  }, []);
  return (
    // loading foods to homepage
    <div>
      <div className="row mx-5 my-0 ">
        {loading ? (
          <h1>Load</h1>
        ) : err ? (
          <h1>Something wrong</h1>
        ) : (
          foods.map((food) => {
            return (
              <div className="col-md-3 py-0 text-center" key={food._id}>
                <div>
                  <Foodcards food={food} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;

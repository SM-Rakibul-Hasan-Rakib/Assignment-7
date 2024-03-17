import PropTypes from "prop-types";
import { LuAlarmClock } from "react-icons/lu";
import { FaFire } from "react-icons/fa";

const Recipe = ({ item, handleToAdd }) => {
  // console.log(item);
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = item;
  return (
    <div className="">
      <div className=" ">
        <div className="card h-[700px] bg-base-100 shadow-xl">
          <figure className="p-4">
            <img src={recipe_image}/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recipe_name}</h2>
            <p>{short_description}</p>
            <h2 className="card-title">Ingredients: {ingredients.length}</h2>
            <div>
              {ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </div>

            <div className="flex gap-12">
              <div className="flex items-center">
                <p>
                  <LuAlarmClock />
                </p>
                <p className="ml-2"> {preparing_time}minutes</p>
              </div>
              <div className="flex items-center flex-row">
                <p>
                  <FaFire />
                </p>
                <p className="ml-2">{calories} calories</p>
              </div>
            </div>
            <div className="card-actions justify-start ">
              <button
                onClick={() => handleToAdd(item)}
                className="btn bg-green-400 text-black   font-bold rounded-3xl hover:bg-green-400 outline-none "
              >
                Want to Cook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  item: PropTypes.object,
};

export default Recipe;
import PropTypes from "prop-types";

const Cart = ({ carts, sorna, sornaHandleToAdd}) => {
  // console.log(carts);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">Want to cook:{carts.length}</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
          

              {carts.map((cart,idx) => (
                
                  <tr key={idx}>
                          <th>{idx + 1}</th>
                    <td>{cart.recipe_name}</td>
                    <td>{cart.preparing_time}</td>
                    <td>{cart.calories}</td>
                    <button onClick={() => sornaHandleToAdd (cart)}  className="btn bg-green-400 text-black   font-bold rounded-3xl hover:bg-green-400 outline-none ">
                      Preparing
                    </button>
                  </tr> 
                
              ))} 
            </tbody>
          </table>

          <h1 className="text-2xl mt-12 font-bold text-center">Currently cooking: {sorna.length}</h1>
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
          

              {sorna.map((cart,idx) => (
                
                  <tr key={idx}>
                          <th>{idx + 1}</th>
                    <td>{cart.recipe_name}</td>
                    <td>{cart.preparing_time}</td>
                    <td>{cart.calories}</td>
                    {/* <button  className="btn bg-green-400 text-black   font-bold rounded-3xl hover:bg-green-400 outline-none ">
                      Preparing
                    </button> */}
                  </tr> 
                
              ))} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
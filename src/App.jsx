
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cart from "./Components/Recipes/Cart";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import Recipes from "./Components/Recipes/Recipes";

function App() {
  const [items, setItems] = useState([]);
  const [carts, setCarts] = useState([]);
  const [sorna, setSorna] = useState([]);
  useEffect(() => {
    fetch("item.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // console.log(items);
  
  const sornaHandleToAdd = (prepared) => {
    
      setSorna([...sorna, prepared]);
      const remaining = carts.filter(
        (item) => item.recipe_id !== prepared.recipe_id
      );
      setCarts(remaining);
    };
  

  const handleToAdd = (item) => {
    console.log(item.recipe_id);
    const isExist = carts.find(
      (singleCard) => singleCard.recipe_id === item.recipe_id
    );
    if (!isExist) {
      setCarts([...carts, item]);
    } else {
       toast("Already Exitst !");
    }
  };
  console.log(carts);
  return (
    <>
      <div>
        <Header></Header>

        <div className="grid">
          <div className="flex flex-col  lg:flex-row md:flex-row justify-between gap-4 mt-6">
            <Recipes handleToAdd={handleToAdd} items={items}></Recipes>
            <div>
              <div className="border lg:p-5 bg-gray-200  rounded-xl">
                <Cart carts={carts} sorna={sorna} sornaHandleToAdd ={sornaHandleToAdd}></Cart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;

// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import "./App.css";
// import Cart from "./Components/Recipes/Cart"
// import Header from "./Components/Header/Header";
// import { useEffect, useState } from "react";
// import Recipes from "./Components/Recipes/Recipes";

// function App() {
//   const [items, setItems] = useState([]);
//   const [carts, setCarts] = useState([]);
//   useEffect(() => {
//     fetch("item.json")
//       .then((res) => res.json())
//       .then((data) => setItems(data));
//   }, []);
//   // console.log(items);

//   const handleToAdd = (item) => {
//     const isExist = carts.find(
//       (singleCard) => singleCard.recipe_id === item.recipe_id
//     );
//     if (!isExist) {
//       setCarts([...carts, item]);
//     } else {
//        toast("Already Exitst !");
//     }



//     setCarts([...carts, item]);

//   };
//   console.log(carts);
//   return (
//     <>
//       <div>
//         <Header></Header>

//         <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-4 mt-6">
//           <Recipes handleToAdd={handleToAdd} items={items}></Recipes>
//           <div>
//             <div className="border bg-gray-200 rounded-xl">
//               <Cart carts={carts}></Cart>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// }

// export default App;
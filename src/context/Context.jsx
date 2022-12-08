import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (i) => {
    const { id, title, price, image } = i;
    // console.log(i.id, i.title, i.price, i.image)
    if (basket.length === 0) {
      console.log("First")
      setBasket((prev) => [
        ...prev,
        {
          id,
          title,
          price,
          image,
          quantity: 1,
        },
      ]);
    } else if (basket.some((item) => item.id === i.id)) {
      console.log("Dupe!");
      setBasket(prev => {
        prev.map(obj => {
          if (obj.id === id) {
            console.log({ ...obj, quantity: obj.quantity++ });
            return {...obj, quantity: obj.quantity++}
          }
        })
      })
    }
    console.log(basket);
  };
  // const handleDone = (item, valueSetter) => {
  //   valueSetter((prev) =>
  //     prev.map((obj) => {
  //       if (obj.id === item.id) {
  //         return { ...obj, isComplete: !obj.isComplete };
  //       }
  //       return obj;
  //     })
  //   );
  // };
  const removeFromBasket = (i) => {
    return;
  };

  return (
    <StoreContext.Provider
      value={{
        addToBasket,
        removeFromBasket,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

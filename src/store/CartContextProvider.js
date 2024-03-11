import React, { useState, useContext, useEffect } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

const baseCartUrl =
  "https://e-commerce-app-dd87e-default-rtdb.firebaseio.com/cart";

async function fetchCartData(modifiedEmail) {
  const response = await fetch(`${baseCartUrl}${modifiedEmail}.json`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
}

const CartContextProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      if (!authCtx.email) {
        return setItems([]);
      }
      const modifiedEmail = authCtx.email.replace("@", "").replace(".", "");
      const cartData = await fetchCartData(modifiedEmail);
      const cartItems = Object.values(cartData);
      setItems(cartItems);
    })();
  }, [authCtx.email]);

  function updateItems(cartData, item) {
    const cartItems = Object.values(cartData);
    const existingItemIndex = cartItems.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      const existingItem = cartItems[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + item.quantity,
      };
      cartItems[existingItemIndex] = updatedItem;
    } else {
      cartItems.push(item);
    }
    setItems(cartItems);
  }

  const addItemToCart = async (item) => {
    try {
      const modifiedEmail = authCtx.email.replace("@", "").replace(".", "");
      const cartData = await fetchCartData(modifiedEmail);

      const reqConfig = { method: "POST", paylod: item, key: "" };
      for (let key in cartData) {
        if (cartData[key].id === item.id) {
          const existingItem = cartData[key];
          reqConfig.paylod = {
            ...existingItem,
            quantity: existingItem.quantity + item.quantity,
          };
          reqConfig.method = "PUT";
          reqConfig.key = `/${key}`;
        }
      }

      const response = await fetch(
        `${baseCartUrl}${modifiedEmail}${reqConfig.key}.json`,
        {
          method: reqConfig.method,
          body: JSON.stringify(reqConfig.paylod),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      updateItems(cartData, item);
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeItemFromCart = async (id) => {
    try {
      const modifiedEmail = authCtx.email.replace("@", "").replace(".", "");
      const getData = await fetchCartData(modifiedEmail);

      let itemKey;
      for (let key in getData) {
        if (getData[key].id === id) {
          itemKey = key;
        }
      }

      const response = await fetch(
        `${baseCartUrl}${modifiedEmail}/${itemKey}.json`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setItems((prevItems) => {
        return prevItems.filter((prevItem) => prevItem.id !== id);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const cartContextObject = {
    items: items,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContextObject}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

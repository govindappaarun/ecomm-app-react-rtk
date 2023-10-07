import { createContext, useReducer } from "react";

const CartContext = createContext();
CartContext.displayName = "CartContext";

const initialState = { items: [], totalCount: 0 };

function cartReducer(state, payload) {
  const { action, value } = payload;
  switch (action) {
    case "ADD_ITEM_CART":
      return {
        ...state,
        items: [...state.items, value],
        totalCount: state.totalCount + (+value.count),
      };
    case "REMOVE_ITEM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id != value.id),
      };
    case "UPDATE_ITEM_CART":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === value.id) {
            return { ...item, count: value.count };
          }
          return item;
        }),
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

const CartContextProvider = (props) => {
  // state
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };

import { createContext, useReducer } from "react";

const CartContext = createContext();
CartContext.displayName = "CartContext";

const initialState = { items: [], totalCount: 0 };

function cartReducer(state, payload) {
  const { action, value } = payload;
  switch (action) {
    case "ADD_ITEM_CART": {
      let itemFound = state.items.find((item) => item.id === value.id);
      return {
        ...state,
        items: itemFound
          ? state.items.map((item) => {
              if (item.id === value.id) {
                return { ...item, count: item.count + +value.count };
              }
              return item;
            })
          : [...state.items, value],
        totalCount: state.totalCount + +value.count,
      };
    }
    case "REMOVE_ITEM_CART": {
      let itemFound;
      return {
        ...state,
        items: state.items.filter((item) => {
          if (item.id == value.id) {
            itemFound = item;
            return false;
          }
          return true;
        }),
        totalCount: state.totalCount - itemFound.count,
      };
    }
    case "UPDATE_ITEM_CART": {
      // console.log(payload);
      let prevItemState;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === value.id) {
            prevItemState = item;
            return { ...item, count: value.count };
          }
          return item;
        }),
        totalCount: state.totalCount + +value.count - prevItemState.count,
      };
    }
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

const CartContextProvider = (props) => {
  // state
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // const handle

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };

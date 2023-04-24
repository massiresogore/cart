import {
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR_CART,
  LOADING,
  DISPLAY_ITEMS,
} from "./action";
export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newA = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newA.get(itemId);
    const newCart = { ...item, amount: item.amount + 1 };
    newA.set(itemId, newCart);

    return { ...state, cart: newA };
  }
  if (action.type === DECREASE) {
    const newA = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newA.get(itemId);

    if (item.amount === 1) {
      newA.delete(itemId);
      return { ...state, cart: newA };
    }
    const newCart = { ...item, amount: item.amount - 1 };
    newA.set(itemId, newCart);

    return { ...state, cart: newA };
  }
  throw new Error(`nos action in ${action.type}`);
};

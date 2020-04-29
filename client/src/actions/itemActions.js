import * as actionTypes from "./types";

export const getItems = () => {
  return {
    type: actionTypes.GET_ITEMS,
  };
};

export const deleteItem = (id) => {
  return {
    // returns to reducer
    type: actionTypes.DELETE_ITEM,
    payload: id,
  };
};

export const addItem = (item) => {
  return {
    // returns to reducer
    type: actionTypes.ADD_ITEM,
    payload: item,
  };
};

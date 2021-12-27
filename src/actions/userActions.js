import { ADD_USER } from "../types";

export const addUser = formData => {
  return {
    type: ADD_USER,
    payload: formData,
  };
};

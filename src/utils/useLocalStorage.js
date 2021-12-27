import { useEffect } from "react";

const getSaveValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  return initialValue;
};
const useLocalStorage = (key, initialValue) => {
  let value = getSaveValue(key, initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
};
export default useLocalStorage;

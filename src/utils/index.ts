import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    // @ts-ignore
    const value = object[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: unknown, delay?: number): any => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

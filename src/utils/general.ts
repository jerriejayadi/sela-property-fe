"use client";

import { useEffect, useRef, useState } from "react";

export const toTitleCase = (string: string) => {
  let arr = string?.split(/[-_ \s]+/);
  for (let i = 0; i < arr?.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  let newString = arr?.join(" ");
  return newString;
};

export const useDebounce = (value: any, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const currencyFormat = (input: string | number): string => {
  let value = input;

  // Ensure value is a string
  if (typeof value === "number") {
    value = value.toString();
  }

  if (value === "0") {
    return "0";
  }

  return value
    .replace(/^0+/, "") // Remove leading zeros
    .replace(/(?!\.)\D/g, "") // Remove non-digits except the first dot
    .replace(/\..*?\./g, ".") // Remove extra dots after the first one
    .replace(/(\.\d{2}).*/g, "$1") // Limit to two decimal places
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas for thousands
};


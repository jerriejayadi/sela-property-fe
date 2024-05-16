export const toTitleCase = (string: string) => {
  let arr = string?.split(/[-_ \s]+/);
  for (let i = 0; i < arr?.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  let newString = arr?.join(" ");
  return newString;
};

type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  const filterArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) filterArray.push(arr[i]);
  }

  return filterArray;
}

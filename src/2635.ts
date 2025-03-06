function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const modifiedArray = [];
  for (let i = 0; i < arr.length; i++) {
    modifiedArray.push(fn(arr[i], i));
  }

  return modifiedArray;
}

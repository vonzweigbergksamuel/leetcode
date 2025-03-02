type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  const toBe = (compVal: any) => {
    if (val === compVal) return true;
    throw new Error("Not Equal");
  };

  const notToBe = (compVal: any) => {
    if (val !== compVal) return true;
    throw new Error("Equal");
  };

  return { toBe, notToBe };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

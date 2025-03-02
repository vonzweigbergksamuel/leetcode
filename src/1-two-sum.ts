function twoSum(nums: number[], target: number): number[] {
  const targets = new Map();
  let solutions: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (targets.has(target - nums[i])) {
      solutions = [targets.get(target - nums[i]), i];
      break;
    } else {
      targets.set(nums[i], i);
    }
  }

  return solutions;
}

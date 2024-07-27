function hasTargetSum(array, target) {
  const differences = new Set()

  for (const num of array) {
    const difference = target - num
    if (differences.has(difference)) {
      return true
    }
    differences.add(num)
  }
  return false
}

/* 
O(n) linear iteration
*/

/* 
Iterate over each element in the array
for each element, check the subsequent elements
calculate the difference needed to reach the target
check if the sum of the current pair equals the target
*/

/*
This defines the function hasTargetSum with parameters array and target
it uses two nested loops to iterate over each pair of elements in the array
for each pair, it checks if their sum equals the target
if a pair is found, return true else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
}

module.exports = hasTargetSum;

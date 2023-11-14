// 4. Given two arrays of integers,
// find which elements in the second array are missing from the first array.
function findMissingItem (arr1, arr2) {
  const result = arr1.filter(item => !arr2.includes(item))
  return result
}
const arr1 = [1,2,3,4,5,6]
const arr2 = [0,2,4,6]
console.log(findMissingItem(arr1, arr2))
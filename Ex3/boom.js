// # Exercise 3: 2D Arrays
// -We have a rectangle garden with 3 row and 5 column: -each cell had a bomb or no bomb: ( 0: SAFE, 1: BOMB)
// -
//  problem: find all the safe way to go from the left to the right of the
//  garden.
// - examples:
// Input: [ [0,1,1], [0,1,1], [0,1,1], [0,1,1], [0,0,1]]
// Output : [ [0,0,0,0,0] , [0,0,0,0,1]]
//[0]
// [0,0]
// [0,0,0], [0,0,2]
// []
function getAllWay(table) {
  const allWays = [[]];
  let tempWays = [[]];
  let tempSafeCells = [];
  for (const col of table) {
    // Save prev allWays
    tempWays = allWays.map(way => [...way]);
    // Reset allWays
    allWays.length = 0;
    // Loop through cells of current column to collect all safe cells
    let hasSafeCell = 0;
    for (index in col) {
      if (col[index] === 0) {
        tempSafeCells.push(index);
        hasSafeCell++;
      }
    }
    // Check if current column has any safe cells
    if (!hasSafeCell) return 'No safe ways found';
    // Transfer all newWay to allWays
    for (const i in tempSafeCells) {
      for (const tempWay of tempWays) {
        const newWay = [...tempWay]; // Clone current tempWay
        newWay.push(tempSafeCells[i]); // Add new safeCell
        allWays.push(newWay); // Push newWay to allWays
      }
    }
    // Reset tempSafeCells after every column loop
    tempSafeCells.length = 0;
  }
  return allWays;
}

console.log(
  getAllWay([
    [0, 1, 1],
    [0, 1, 1],
    [0, 1, 0],
    [0, 1, 1],
    [0, 0, 1],
  ])
);

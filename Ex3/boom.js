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
  const allWays = [];
  let tempWay = [];

  for (const col of table) {
    const safePositions = col.reduce((result, curValue, i) => {
      if (curValue === 0) result.push(i);
      return result;
    }, []);
    const safePosCount = safePositions.length;
    // console.log(safePositions, safePosCount);
    if (safePosCount === 1) {
      tempWay.push(safePositions[0]);
      allWays.push(tempWay);
    } else {
      for (const safePos of safePositions) {
        const newWay = tempWay.slice();
        newWay.push(safePos);
        // console.log(newWay)
      }
    }
  }
}
getAllWay([
  [0, 1, 1],
  [0, 1, 1],
  [0, 1, 1],
  [0, 1, 1],
  [0, 0, 1],
]);

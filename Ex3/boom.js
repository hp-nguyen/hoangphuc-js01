function getAllWay(table) {
  const allWays = [[]];
  let tempWays = [[]];
  let tempSafeCells = [];
  for (const col of table) {
    tempWays = allWays.map(way => [...way]);
    allWays.length = 0;
    let hasSafeCell = 0;
    for (index in col) {
      if (col[index] === 0) {
        tempSafeCells.push(index);
        hasSafeCell++;
      }
    }
    if (!hasSafeCell) return 'No safe ways found';
    for (const i in tempSafeCells) {
      for (const tempWay of tempWays) {
        const newWay = [...tempWay];
        newWay.push(tempSafeCells[i]);
        allWays.push(newWay);
      }
    }
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

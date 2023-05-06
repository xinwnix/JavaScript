const isArrEmpty = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) {
      return true;
    }
  }
  return false;
};

const dequy = (arr, m = []) => {
  if (arr.length <= 1) {
    return arr;
  } else if (isArrEmpty(arr)) {
    return m;
  } else {
    let subArrays = arr;
    let remainingArray = [];
    if (arr.length > 2) {
      subArrays = arr.slice(0, 2);
      remainingArray = arr.slice(2);
    }

    for (let x = 0; x < subArrays[0].length; x++) {
      let checkCoincidence = false;

      if (x > 0) {
        for (let z = x - 1; z > 0; z--) {
          if (subArrays[0][x] === subArrays[0][z]) {
            checkCoincidence = true;
          }
        }
      }

      if (checkCoincidence) continue;

      for (let y = 0; y < subArrays[1].length; y++) {
        if (subArrays[0][x] === subArrays[1][y]) {
          m.push(subArrays[0][x]);
          break;
        }
      }
    }

    return dequy([[...m], ...remainingArray]);
  }
};

let arrays = [
  [1, 2, 3, 3],
  [1, 3],
  [3, 2, 1],
];

console.log("result", dequy(arrays));

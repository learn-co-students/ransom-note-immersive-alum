function buildHistogram(array) {
  let result = {};
  array.map(i => {
    result[i] === undefined ? result[i] = 1 : result[i]++
  });
  return result;
}

function binaryMatch(array, target) {
  let result = buildHistogram(array)
  return result[target];
}

function canBuildNote(magazine, note) {
  let matches = [];
  let histogram = buildHistogram(magazine);
  for (let i = 0; i < note.length; i++) {
    if (histogram[note[i]] === undefined || histogram[note[i]] < 1) {
      return false
    } else if (note[i] === "") {
      matches.push(note[i])
    } else {
      histogram[note[i]]--
      matches.push(note[i])
    }
  }

  return matches.length === note.length ? true : false
}

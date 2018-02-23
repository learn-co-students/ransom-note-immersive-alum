function buildHistogram(magazine) {
  let dictionary = {};
  for (let i in magazine) {
    dictionary[magazine[i]]
      ? (dictionary[magazine[i]] += 1)
      : (dictionary[magazine[i]] = 1);
  }
  return dictionary;
}

function canBuildNote(magazine, note) {
  let result = true;
  let magazineDict = buildHistogram(magazine);
  let noteDict = buildHistogram(note);
  for (let i in noteDict) {
    if (!magazineDict[i]) {
      return false;
    }
    if (noteDict[i] > magazineDict[i]) {
      return false;
    }
  }
  return false;
}

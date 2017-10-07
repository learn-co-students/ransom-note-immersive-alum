function canBuildNote(magazine, note) {
  // sort magazine into histogram
  let histogram = buildHistogram(magazine)

  // for each letter in note
  note = note.replace(" ", "").split("")
  for (let i = 0; i < note.length; i++) {
    // look up in histogram
    if (histogram[note[i]] > 0) {
      // if present then decrement histogram count by 1
      histogram[note[i]]--
    } else {
      return false
    }
  }
  return true
}

function buildHistogram(magazine) {
  let histogram = {}
  magazine.forEach( letter => {
    if (histogram[letter]) {
      histogram[letter]++
    } else {
      histogram[letter] = 1
    }
  })
  return histogram
}

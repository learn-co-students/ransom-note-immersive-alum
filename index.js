function binaryMatch(array) {
  return buildHistogram(array)
}

function buildHistogram(array) {
  let histogram = {}

  array.forEach(letter => {
    if (letter !== ' ') {
      if (histogram[letter]) {
        histogram[letter] +=1
      } else {
        histogram[letter] = 1
      }
    }
  })
  return histogram
}

function canBuildNote(array, note) {
  let histogram = buildHistogram(array)

  note = note.split('')
  for (let i = 0; i < note.length; i++) {
    if (note[i] !== ' ') {
      const letter = note[i]
      if (histogram[letter] && histogram[letter] > 0) {
        histogram[letter] -= 1
      } else {
        return false
      }
    }
  }
  return true
}

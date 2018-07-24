function buildHistogram(array) {
  let hash = {}
  array.forEach(x => {
    hash[x] ? hash[x] = hash[x]+1 : hash[x] = 1
  })
  return hash
}

function canBuildNote(array, note) {
  let list = buildHistogram(array)
  let result = true
  note.split(' ').join('').split('').forEach(x => {
    if (list[x] == 1) {
      delete list[x]
    } else if (list[x]) {
      list[x] = list[x]-1
    } else {
      result = false
    }
  })
  return result
}

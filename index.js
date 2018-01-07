
function buildHistogram(magazine) {
  let obj = {}

  for (let i=0; i<magazine.length; i++) {
    if (obj[magazine[i]]) {
      obj[magazine[i]] += 1
    } else {
      obj[magazine[i]] = 1
        }
    }
    return obj
}

function canBuildNote(magazine,ransom) {
  let ranObj = buildHistogram(ransom)
  let magObj = buildHistogram(magazine)
  let count = 0

  for (let k in ranObj) {
   if (magObj.hasOwnProperty(k) && (magObj[k] >= ranObj[k])) {
     count += ranObj[k]
    }
   }

  if (count === ransom.length) {
      return true
  } else {
      return false
  }
}



function buildHistogram(magazine){
  let count = {}

  magazine.forEach(function(letter){
    if(count[letter]){
      count[letter]++
    } else {
      count[letter] = 1
    }
  })

  return count
}

function canBuildNote(magazine, note){

  let histogram = buildHistogram(magazine)
  let letters = note.split(" ").join("").split("")

  for(let i = 0; i < letters.length; i++){
    if(!histogram[letters[i]] || histogram[letters[i]] === 0){
      return false
    } else {
      histogram[letters[i]]--
    }
  }
  return true
}

function buildHistogram(array){
  let hash = {}

  array.forEach(letter => {
    if(hash[letter]) {
      hash[letter] = hash[letter] + 1;
    } else{
      hash[letter] = 1;
    }
  })
  return hash;
}

function canBuildNote(array1, note){

  let hash1 = buildHistogram(array1);

  let array2 = note.split('');
  let hash2 = buildHistogram(array2);

  let counter = 0;
  array2.forEach(letter => {
    if(hash1[letter] >= hash2[letter]){
      ++counter;
    }
  })

  if(counter === array2.length){
    return true;
  } else{
    return false;
  }
}

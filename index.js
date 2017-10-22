function buildHistogram(magazine) {
  let note_table = new Object;
  for (var i = 0; i < magazine.length; i++){
    if (note_table[magazine[i]]){
      note_table[magazine[i]]++
    } else {
      note_table[magazine[i]] = 1
    }
  };
  return note_table;
};

function canBuildNote(magazine, note) {
  let hash_mag = buildHistogram(magazine);
  let hash_note = buildHistogram(note);
  let result = true;

  for (var letter in hash_note){
    if(hash_note[letter] > hash_mag[letter] || !hash_mag[letter]){
      result = false;
      return result;
    }
  }
  return result;
}

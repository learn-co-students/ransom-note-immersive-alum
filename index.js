let magazine = [
  "h",
  "e",
  "r",
  "e",
  "a",
  "r",
  "e",
  "s",
  "o",
  "m",
  "e",
  "n",
  "i",
  "c",
  "e",
  "c",
  "l",
  "o",
  "t",
  "h",
  "e",
  "s",
  "t",
  "h",
  "a",
  "t",
  "y",
  "o",
  "u",
  "s",
  "h",
  "o",
  "u",
  "l",
  "d",
  "b",
  "u",
  "y",
  "t",
  "h",
  "e",
  "y",
  "a",
  "r",
  "e",
  "c",
  "h",
  "e",
  "a",
  "p",
  "a",
  "n",
  "d",
  "w",
  "o",
  "n",
  "d",
  "e",
  "r",
  "f",
  "u",
  "l",
  "f",
  "o",
  "r",
  "t",
  "h",
  "e",
  "s",
  "u",
  "m",
  "m",
  "e",
  "r"
];

const binaryMatch = arr => {
  let hash = {};
  arr.forEach(element => {
    if (hash[element]) {
      hash[element] += 1;
    } else {
      hash[element] = 1;
    }
  });
  return hash;
};

const canBuildNote = (maganize, note) => {
  hashMagazine = binaryMatch(magazine);
  for (let i = 0; i < note.length; i++) {
    if (hashMagazine[note[i]] > 0) {
      hashMagazine[note[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};
// console.log(binaryMatch(magazine));

let note = "hand me the ferbie or else";
let note2 = "eeeeeeeeeee"
// console.log()
console.log(canBuildNote(magazine, note2));

const buildHistogram = (array)=>{
  const ans = {}
  array.forEach(c=>ans[c]=(ans[c]||0)+1)
  return ans;
}
const canBuildNote = (array, note)=>{
  const magH = buildHistogram(array);
  const noteH = buildHistogram(Array.from(note.replace(" ","")));
  for( let key in noteH ){
    if( !magH[key]) return false;
    if( noteH[key] > magH[key]) return false;
  }
  return true;
}
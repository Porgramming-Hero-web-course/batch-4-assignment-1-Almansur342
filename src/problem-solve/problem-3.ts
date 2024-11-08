{
  function countWordOccurrences(str1: string, str2: string) : number{
    const removeCaseSensetive = new RegExp(`\\b${str2}\\b`,'gi');
    const mathchWord = str1.match(removeCaseSensetive);
    return mathchWord ? mathchWord.length : 0;
  }

  console.log(countWordOccurrences("I typescript typescript love typescript why typescript", "typescript"));
}
const removeWhiteSpace = (string) => {
  let stringArray = string.split(" ");
  let result = '';
  for (i in stringArray) {
    if ( stringArray[i] === "" ) continue;
    result += stringArray[i] + " ";
  }
  return result.trim();
};

module.exports = removeWhiteSpace;

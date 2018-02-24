module.exports = function check(str, bracketsConfig) {
  let arBracketsRegExp = [];
  bracketsConfig.forEach(function(elem) {
    arBracketsRegExp.push(new RegExp("\\" + elem[0] + "\\" + elem[1], "g"));
  });
  let strBefore, count = 0, size = arBracketsRegExp.length, res = false;
  while(true) {
    arBracketsRegExp.forEach(function(elem) {
      do {
        strBefore = str;
        str = str.replace(elem, '');
        count += 1;
      } while(strBefore != str);
    });
    if (count == size) {
      if (str.length == 0)
        res = true;
      break;
    }
    count = 0;
  }
  return res;
}

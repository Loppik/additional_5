module.exports = function check(str, bracketsConfig) {
  let arBracketsRegExp = [];
  let dopStr = "\\";
  let numbers = [1,2,3,4,5,6,7,8,9];
  bracketsConfig.forEach(function(elem) {
    if (Number(elem[0]) in numbers) {
      dopStr = "";
    }
    arBracketsRegExp.push(new RegExp(dopStr + elem[0] + dopStr + elem[1], "g"));
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

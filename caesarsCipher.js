/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/
function rot13(str) {
    let arrstr = str.split(""),
    codes = arrstr.map(char=>char.charCodeAt()),
    adjust = codes.map(function(code)
    {
      if(code > 64 && code <91)
      {
      if(code+13 > 64 && code+13 < 91)
        {
        return code+13;
        } else {return (code - 26) + 13};
      } else{return code;};
    });
    return adjust.map(adj=>String.fromCharCode(adj)).join("");
  };
  //Tests
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
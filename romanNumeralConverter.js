/*Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.*/
function convertToRoman(num) {
  //create a dictionary
  const values = {
    1000 : "M",
    900 : "CM",
    500 : "D",
    400 : "CD",
    100 : "C",
    90 : "XC",
    50 : "L",
    40 : "XL",
    10 : "X",
    9 : "IX",
    5 : "V",
    4 : "IV",
    1 : "I"
  };
  let llaves = Object.keys(values);
  let roman = "";
  let flag = true;
  while(flag){
  if(num>parseInt(llaves[12])){
    roman += values[llaves[12]];
    num -= parseInt(llaves[12]);
  }else{
  flag = false;
  };
  };
  for (let i=llaves.length-1; i>0; i--){
    if(num <= llaves[i] && num >= llaves[i-1]){
      if (num === parseInt(llaves[i])){
        roman += values[llaves[i]];
        break;
      };
      roman += values[llaves[i-1]];
      num -= parseInt(llaves[i-1]);
      i++;
    };
  };
 return roman;
};
//Tests
console.log(convertToRoman(2));
console.log(convertToRoman(12));
console.log(convertToRoman(1004));
console.log(convertToRoman(44));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(649));
console.log(convertToRoman(891));
console.log(convertToRoman(1023));
console.log(convertToRoman(3999));
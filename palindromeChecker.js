/*Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.*/

function palindrome(str) {
    str=str.toLowerCase().split("")
    let string = str.filter(n=>/[a-z0-9]/.test(n))
    let block1 = string.slice(0,string.length/2);
    let block2 = string.reverse().slice(0, string.length/2);
    let palindrome = true;
    for (let i=0; i<block1.length; i++){
      if (block1[i] != block2[i]){
        palindrome = false;
        break;
      };
    };
    
    return palindrome;
  }
  
  console.log(palindrome("eye"));
  console.log(palindrome("_eye"));
  console.log(palindrome("race car"));
  console.log(palindrome("not a palindrome"));
  console.log(palindrome("A man, a plan, a canal. Panama"));
  console.log(palindrome("never odd or even"));
  console.log(palindrome("nope"));
  console.log(palindrome("almostomla"));
  console.log(palindrome("0_0 (: /-\ :) 0-0"));
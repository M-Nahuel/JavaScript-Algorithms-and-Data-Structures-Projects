const button = document.getElementById('decode');
const input = document.getElementById('code');
const output = document.getElementById('output');

function rot13(str) {
    let arrstr = str.toUpperCase().split(""),
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

button.addEventListener('click', () => {
  const decoded = rot13(input.value);
  output.textContent = `This is the decoded text: ${decoded}`;
});
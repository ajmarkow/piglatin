const vowels = ["a", "e", "i", "o", "u"];

//Code to test for words beginning with an a:
//RegExp.test([a]);

//Code to test for words beginning 
$(document).ready(function () {
  $("form#formsubmit").submit(function (event) {
    event.preventDefault();
    let userWord = $("#userinput").val();
    let arrayOfInput = [];
    arrayOfInput.push(userWord);
    const pigLatin = arrayOfInput.map(function (text) {
      console.log(pigLatin);
      if (/[aieou]/) {
        arrayOfInput.push("way");
        arrayOfInput.join((''));
      }
      else if (/[^aieou]/i) {
        arrayOfInput.replace(/[aieou]/gi, (charAt(0) + "ay"));
      }
      else if (/[qu]/gi) {
        $(string).slice(+ "quay");
      }

      else if ("begins with y"); {
      }
      return (text);
    });
    $("#translation").show();
  });
});

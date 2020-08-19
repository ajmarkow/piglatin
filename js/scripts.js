const vowels = ["a", "e", "i", "o", "u"];

//Code to test for words beginning with an a:
RegExp.test([a]);

//Code to test for words beginning 

("#formsubmit").submit(function (event) {
  event.preventDefault();
  let arrayofinput = [];
  arrayofinput = $("input#userswords").val()
  const piglatin = arrayofinput.map(function (string) {
    if (/[aieou]/) {
      arrayofinput.push("way");
    }
    else if (/[^aieou]/i) {
      arrayofinput.replace(/[aieou]/gi, (charAt(0) + "ay"));
    }
    else if (/[qu]/gi) {
      $(string).slice(+ "quay");
    }

    else if ("begins with y"); {
    }
    return (translatedword);
  });
})

console.log(arrayofinput);
const functions = require('firebase-functions');

 exports.translate = functions.https.onRequest((request, response) => {   
  const text = request.body.texto;
  const str =
      [
          ['a', 'b', 'c'],
          ['d', 'e', 'f'],
          ['g', 'h', 'i'],
          ['j', 'k', 'l'],
          ['m', 'n', 'o'],
          ['p', 'q', 'r', 's'],
          ['t', 'u', 'v'],
          ['w', 'x', 'y', 'z']
      ];

  let arrayMsg = text.split(" ");
  let result = "";
  for (let i = 0; i < arrayMsg.length; i++) {
      let num = parseInt(arrayMsg[i][0]);
      let tecla = num - 2;
      let caracter = arrayMsg[i].length - 1;
      result += str[tecla][caracter];
  }
  return response.send(result);
});

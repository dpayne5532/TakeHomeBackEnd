const express = require('express');
const app = express();
const fs = require('fs'),
  https = require('https');

var PORT = process.env.PORT || 8080



function changeUSD(amount) {
  const denominations = [100, 50, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  const result = { change: amount };

  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    const count = Math.floor(result.change / denomination);

    if (count > 0) {
      result[denomination] = count;
      result.change -= denomination * count;
      result.change = result.change.toFixed(2);
    }
  }
  delete result["change"]

  var newObj = convertToString(result)

  return newObj;
}

// This should be a switch statement
function convertToString(obj) {
  var newResult = {}
  if (obj[100]) {
    newResult[`hundreds`] = obj[100]
  }
  if (obj[50]) {
    newResult[`fifties`] = obj[50]
  }
  if (obj[20]) {
    newResult[`twenties`] = obj[20]
  }
  if (obj[10]) {
    newResult[`tens`] = obj[10]
  }
  if (obj[5]) {
    newResult[`fives`] = obj[5]
  }
  if (obj[1]) {
    newResult[`ones`] = obj[1]
  }
  if (obj[0.25]) {
    newResult[`quarters`] = obj[0.25]
  }
  if (obj[0.10]) {
    newResult[`dimes`] = obj[0.10]
  }
  if (obj[0.05]) {
    newResult[`nickels`] = obj[0.05]
  }
  if (obj[0.01]) {
    newResult[`pennies`] = obj[0.01]
  }
  newResult[`gitHubRepo`] = `https://github.com/dpayne5532/TakeHomeBackEnd`

  return newResult;
}

app.get('/:amount', (req, res) => {
   var amount = req.params.amount
  var result = changeUSD(amount)
  console.log(req.params.amount, " Is the Amount that came through!")
  console.log("The results are \n", result)
  res.json(result)
})

 app.listen(PORT, () => console.log(`---===   Server listening on PORT ${PORT}   ===---`))





const express = require('express');
const app = express();

var PORT = process.env.PORT || 3010

function changUSD(amount) {
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
  return result;
}


app.get('/:amount', (req, res) => {
   var amount = req.params.amount
  var result = changUSD(amount)

  res.json(result)
})




app.listen(PORT, () => console.log(`---===   Server listening on PORT ${PORT}   ===---`))


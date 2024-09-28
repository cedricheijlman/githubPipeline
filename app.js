const express = require("express");
const app = express();
const port = 3000;

// Route die 'Hello, World!' retourneert
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Nieuwe route die twee getallen bij elkaar optelt
app.get("/add/:num1/:num2", (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid numbers");
  }

  const result = num1 + num2;
  res.send(`The result is ${result}`);
});

// Start de server alleen als het script direct wordt uitgevoerd, niet tijdens de tests
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app; // Exporteer de Express-app voor gebruik in tests zonder de server te starten

const express = require("express");
const app = express();
const port = 3000;

// Route die 'Hello, World!' retourneert
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start de server alleen als het script direct wordt uitgevoerd, niet tijdens de tests
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app; // Exporteer de Express-app voor gebruik in tests zonder de server te starten

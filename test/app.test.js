const request = require("supertest");
const app = require("../app.js"); // Import de Express-app

describe("GET /", () => {
  it("should return Hello, World!", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /text/)
      .expect(200)
      .expect("Hello,s World!", done); // Controleer of de response "Hello, World!" is
  });
});

describe("GET /add/:num1/:num2", () => {
  it("should return the sum of two numbers", (done) => {
    request(app)
      .get("/add/3/7") // Test met 3 en 7
      .expect("Content-Type", /text/)
      .expect(200)
      .expect("The result is 10", done); // Verwacht dat de som 10 is
  });

  it("should return 400 for invalid numbers", (done) => {
    request(app)
      .get("/add/a/b") // Test met ongeldige invoer
      .expect(400) // Verwacht een 400-status
      .expect("Invalid numbers", done); // Verwacht de foutboodschap
  });
});

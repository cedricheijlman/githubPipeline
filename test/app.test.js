const request = require("supertest");
const app = require("../app.js"); // Import de Express-app

describe("GET /", () => {
  it("should return Hello, World!", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /text/)
      .expect(200)
      .expect("Hello, World!", done); // Controleer of de response "Hello, World!" is
  });
});

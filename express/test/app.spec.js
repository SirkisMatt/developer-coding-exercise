const app = require("../index");

describe("App", () => {
  it("GET / responds with 200 containing Hello World", async () => {
    const response = await supertest(app).get("/posts");
    expect(response.statusCode).to.equal(200);
    expect(response.text).to.equal("Hello World");
  });
});

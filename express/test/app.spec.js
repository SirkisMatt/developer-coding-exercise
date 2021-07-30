const app = require("../index");

describe("App", () => {
  describe("GET /posts", () => {
    it("GET /posts responds with 200 containing json array of all post", async () => {
      const response = await supertest(app).get("/posts");
      expect(response.statusCode).to.equal(200);
      expect(response.body[0]).to.have.property("title");
      expect(response.body[0]).to.have.property("slug");
      expect(response.body).to.be.an("array");
    });
  });

  describe("GET /post/:slug", () => {
    it("GET /posts responds with 200 containing json array of all post", async () => {
      const response = await supertest(app).get("/post/kiasuism-vs-no8-wire");
      expect(response.statusCode).to.equal(200);
      expect(response.body.post).to.have.property("content");
      expect(response.body.post).to.have.property("tags");
    });
  });
});

import service from "../lib/services/config";

describe("config", () => {
  // bring in env variables
  require("dotenv").config();
  const { CLIENT_ID, CLIENT_SECRET } = process.env;
  test("should have env variables", () => {
    expect(typeof CLIENT_ID).toBe("string");
    expect(typeof CLIENT_SECRET).toBe("string");
  });
  test("should return object with inner credentials obj", () => {
    const { v, client_id, client_secret } = service.getConfig({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET
    }).credentials;
    expect(v).toBeTruthy();
    expect(client_id).toBeTruthy();
    expect(client_secret).toBeTruthy();
  });
});

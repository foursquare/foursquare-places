import Foursquare from "../Foursquare";

describe("Foursquare class", () => {
  // bring in env variables
  require("dotenv").config();
  const { CLIENT_ID, CLIENT_SECRET } = process.env;

  test("should return object with inner credentials obj", () => {
    const FSQ = new Foursquare(CLIENT_ID, CLIENT_SECRET);
    expect(FSQ.credentials.client_id).toBeTruthy();
    expect(FSQ.credentials.client_secret).toBeTruthy();
  });
});

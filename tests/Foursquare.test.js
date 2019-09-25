import Foursquare from "../foursquare";

describe("Foursquare class", () => {
  // bring in env variables
  require("dotenv").config();
  const { CLIENT_ID, CLIENT_SECRET } = process.env;

  test("should return object with inner credentials obj", () => {
    const FSQ = new Foursquare(CLIENT_ID, CLIENT_SECRET);
    expect(FSQ.venues).toBeTruthy();
    expect(FSQ.photos).toBeTruthy();
    expect(FSQ.tips).toBeTruthy();
    expect(FSQ.lists).toBeTruthy();
  });
});

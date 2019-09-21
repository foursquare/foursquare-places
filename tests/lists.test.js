import Foursquare from "../Foursquare";

describe("lists", () => {
  // Setup Keys
  require("dotenv").config();
  const { CLIENT_ID, CLIENT_SECRET } = process.env;
  const foursquare = new Foursquare(CLIENT_ID, CLIENT_SECRET);

  test("should return photo details", async () => {
    const data = await foursquare.photos.getPhoto("5580721e498e7c48540bf83f");
    expect(data.response.list).toBeTruthy();
  });
});

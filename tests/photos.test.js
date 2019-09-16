import Foursquare from "../Foursquare";

describe("venues", () => {
  // Setup Keys
  require("dotenv").config();
  const { CLIENT_ID, CLIENT_SECRET } = process.env;
  const foursquare = new Foursquare(CLIENT_ID, CLIENT_SECRET);

  test("should return photo details", async () => {
    const data = await foursquare.photos.getPhoto("5d49f1c7d0cd2100086be853");
    expect(data.response.photo).toBeTruthy();
  });
});

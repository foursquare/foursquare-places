import Foursquare from "../";

describe("tips", () => {
  // Setup Keys
  require("dotenv").config();
  const { CLIENT_ID, CLIENT_SECRET } = process.env;
  const foursquare = new Foursquare(CLIENT_ID, CLIENT_SECRET);

  test("should return details for a specific tip id", async () => {
    const data = await foursquare.tips.getTip("53bc46b7498e355aed38c696");
    expect(data.response.tip).toBeTruthy();
  });
});

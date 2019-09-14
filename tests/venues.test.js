import service from "../lib/services/config";
import venues from "../lib/api/venues";

describe("venues", () => {
  // Setup Keys
  require("dotenv").config();
  const { CLIENT_ID, CLIENT_SECRET } = process.env;
  const config = service.getConfig({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET
  });

  // instantiate singleton
  const foursquare = {
    venues: venues(config)
  };

  // create default queries

  const queryParams = {
    query: "tacos",
    ll: [40.7128, -74.006].join(","),
    limit: 5
  };

  test("should return categories", async () => {
    const data = await foursquare.venues.categories();
    expect(data.response.categories).toBeTruthy();
  });
  test("should return explore", async () => {
    const data = await foursquare.venues.explore(queryParams);
    expect(data.response).toBeTruthy();
  });
  test("should return recommendations", async () => {
    const data = await foursquare.venues.recommendations(queryParams);
    console.log({ data });
    expect(data.response).toBeTruthy();
  });
  test("should return trending", async () => {
    const data = await foursquare.venues.trending(queryParams);
    console.log({ data });
    expect(data.response).toBeTruthy();
  });
  test("should return Venues", async () => {
    const data = await foursquare.venues.getVenues(queryParams);
    expect(data.response.venues).toBeTruthy();
  });
  //   hard code venueid here
  test("should fail without Venue id", async () => {
    await expect(foursquare.venues.getVenue(queryParams)).rejects.toThrow(
      "Request failed with status code 400"
    );
  });

  test("should pass with Venue id", async () => {
    const data = await foursquare.venues.getVenue({
      venueid: "4b748b93f964a52014e32de3",
      ll: [40.7128, -74.006].join(","),
      limit: 5
    }).response.venue.id;
    await expect().toBeTruthy();
  });
});

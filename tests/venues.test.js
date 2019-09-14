// import service from "../lib/services/config";
import venues from "../lib/api/venues";
import Foursquare from "../Foursquare";

describe("venues", () => {
  // Setup Keys
  require("dotenv").config();
  const { CLIENT_ID, CLIENT_SECRET } = process.env;
  const foursquare = new Foursquare(CLIENT_ID, CLIENT_SECRET);

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
    expect(data.response).toBeTruthy();
  });
  test("should return trending", async () => {
    const data = await foursquare.venues.trending(queryParams);
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

  test("should get Venue photos", async () => {
    const data = await foursquare.venues.getVenuePhotos({
      venue_id: "4b748b93f964a52014e32de3",
      ll: [40.7128, -74.006].join(","),
      limit: 5
    });
    await expect(data.response.photos).toBeTruthy();
  });

  test("should pass with Venue tips", async () => {
    const data = await foursquare.venues.getVenue({
      venue_id: "4b748b93f964a52014e32de3",
      ll: [40.7128, -74.006].join(","),
      limit: 5
    });
    expect(data.response.venue).toBeTruthy();
  });

  test("should suggest venue names", async () => {
    const data = await foursquare.venues.suggestCompletion(queryParams);
    await expect(data.response.minivenues).toBeTruthy();
  });
  test("should get venue hours", async () => {
    const data = await foursquare.venues.getVenueHours({
      venue_id: "4b748b93f964a52014e32de3",
      ll: [40.7128, -74.006].join(","),
      limit: 5
    });
    expect(data.response.hours).toBeTruthy();
  });
  test("should get venue's menu", async () => {
    const data = await foursquare.venues.getVenueMenu({
      venue_id: "4b748b93f964a52014e32de3",
      ll: [40.7128, -74.006].join(","),
      limit: 5
    });
    expect(data.response.menu).toBeTruthy();
  });
});

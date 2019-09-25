import Foursquare from "../foursquare";

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
  test("should get venue's links", async () => {
    const data = await foursquare.venues.getVenueLinks({
      venue_id: "4b748b93f964a52014e32de3",
      ll: [40.7128, -74.006].join(","),
      limit: 5
    });
    expect(data.response.links).toBeTruthy();
  });
  test("should get similar venues to the one passed in", async () => {
    const data = await foursquare.venues.getSimilarVenues({
      venue_id: "4b748b93f964a52014e32de3",
      ll: [40.7128, -74.006].join(","),
      limit: 5
    });
    expect(data.response.similarVenues).toBeTruthy();
  });
  test("should get venues that people check in after the one passed", async () => {
    const data = await foursquare.venues.getNextVenues({
      venue_id: "4b748b93f964a52014e32de3",
      ll: [40.7128, -74.006].join(","),
      limit: 5
    });
    expect(data.response.nextVenues).toBeTruthy();
  });
  test("should get lists that this venue appears on", async () => {
    const data = await foursquare.venues.getListVenueIsOn({
      venue_id: "4b748b93f964a52014e32de3",
      ll: [40.7128, -74.006].join(","),
      limit: 5
    });
    expect(data.response.lists).toBeTruthy();
  });
});

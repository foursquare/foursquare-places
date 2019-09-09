import querystring from "querystring";
import request from "../services/request";

export default config => {
  const { credentials } = config;
  config = Object.assign(config, {
    apiFeature: "/venues"
  });

  return {
    // Get Venue Categories : /docs/api/venues/categories
    categories() {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/categories?" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    // Get Venue Recommendations : docs/api/venues/explore
    explore(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/explore?" +
        querystring.stringify(params) +
        "&" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    // weird, it does not show up on side panel - must search link
    // Get Venue Recommendations : /docs/api/venues/recommendations
    recommendations(params) {
      const urlString =
        config.apiUrl +
        "/search/recommendations?" +
        querystring.stringify(params) +
        "&" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    // Get Trending Venues : /docs/api/venues/trending
    trending(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/trending?" +
        querystring.stringify(params) +
        "&" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    // Search for Venues : /docs/api/venues/search
    getVenues(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/search?" +
        querystring.stringify(params) +
        "&" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    // Get Details of a Venue : /docs/api/venues/details
    getVenue(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/" +
        params.venue_id +
        "?" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    getVenuePhotos(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/" +
        params.venue_id +
        "/photos?" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    getVenueTips(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/" +
        params.venue_id +
        "/tips?" +
        querystring.stringify(credentials);
      return request(urlString);
    },
    suggestCompletion(params) {
      const urlString =
        config.apiUrl +
        config.apiFeature +
        "/suggestcompletion?" +
        querystring.stringify(params) +
        "&" +
        querystring.stringify(credentials);
      return request(urlString);
    }
  };
};

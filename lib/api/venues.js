import querystring from "querystring";
import request from "../services/request";

/*
export default (config, apiFeature) => {
  const { credentials } = config;
  config = Object.assign(config, {
    apiFeature
  });
*/

export default config => {
  const { credentials } = config;
  config = Object.assign(config, {
    apiFeature: "/venues"
  });

  // Docs base path: https://developer.foursquare.com/
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
    // weird, it does not show up on side panel - must search link - answer
    // answer: this is for our large enterprise, if smaller use the above explore
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
    // Get a Venue's Photos : /docs/api/venues/photos
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
    // Get a Venue's Tips : /docs/api/venues/tips
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
    // Suggest Completion - /docs/api/venues/suggestcompletion
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

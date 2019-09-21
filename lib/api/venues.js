import querystring from "querystring";
import request from "../services/request";

export default class Venues {
  constructor(config) {
    this.config = config;
  }

  // Docs base path: https://developer.foursquare.com/
  // Get Venue Categories : /docs/api/venues/categories
  categories() {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/categories?" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // Get Venue Recommendations : docs/api/venues/explore
  explore(params) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/explore?" +
      querystring.stringify(params) +
      "&" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // weird, it does not show up on side panel - must search link - answer
  // answer: this is for our large enterprise, if smaller use the above explore
  // Get Venue Recommendations : /docs/api/venues/recommendations
  recommendations(params) {
    const urlString =
      this.config.apiUrl +
      "/search/recommendations?" +
      querystring.stringify(params) +
      "&" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // Get Trending Venues : /docs/api/venues/trending
  trending(params) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/trending?" +
      querystring.stringify(params) +
      "&" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // Search for Venues : /docs/api/venues/search
  getVenues(params) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/search?" +
      querystring.stringify(params) +
      "&" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // Get Details of a Venue : /docs/api/venues/details
  getVenue(params) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/" +
      params.venue_id +
      "?" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // Get a Venue's Photos : /docs/api/venues/photos
  getVenuePhotos(params) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/" +
      params.venue_id +
      "/photos?" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // Get a Venue's Tips : /docs/api/venues/tips
  getVenueTips(params) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/" +
      params.venue_id +
      "/tips?" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // Suggest Completion - /docs/api/venues/suggestcompletion
  suggestCompletion(params) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/suggestcompletion?" +
      querystring.stringify(params) +
      "&" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // Get a Venue's Hours - /docs/api/venues/hours
  getVenueHours(params) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/" +
      params.venue_id +
      "/hours?" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // Get a Venue's Hours - /docs/api/venues/hours
  getVenueMenu(params) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/" +
      params.venue_id +
      "/menu?" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // Get a Venue's Links - /docs/api/venues/links
  getVenueLinks(params) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/" +
      params.venue_id +
      "/links?" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // Get Similar Venues - /docs/api/venues/similar
  getSimilarVenues(params) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/" +
      params.venue_id +
      "/similar?" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // Get Next Venues - /docs/api/venues/nextvenues
  getNextVenues(params) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/" +
      params.venue_id +
      "/nextvenues?" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
  // Get Lists a Venue is On - /docs/api/venues/listed
  getListVenueIsOn(params) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/" +
      params.venue_id +
      "/listed?" +
      querystring.stringify(this.config.credentials);
    return request(urlString);
  }
}

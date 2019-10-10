import querystring from "querystring";
import request from "../services/request";

export default class Venues {
  constructor({ apiUrl, apiFeature, credentials }) {
    this.apiUrl = apiUrl;
    this.apiFeature = apiFeature;
    this.credentials = credentials;
  }

  // Docs base path: https://developer.foursquare.com/
  // Get Venue Categories : /docs/api/venues/categories
  categories() {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/categories?" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Get Venue Recommendations : docs/api/venues/explore
  explore(params) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/explore?" +
      querystring.stringify(params) +
      "&" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Get Venue Recommendations : /docs/api/venues/recommendations
  recommendations(params) {
    const urlString =
      this.apiUrl +
      "/search/recommendations?" +
      querystring.stringify(params) +
      "&" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Get Trending Venues : /docs/api/venues/trending
  trending(params) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/trending?" +
      querystring.stringify(params) +
      "&" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Search for Venues : /docs/api/venues/search
  getVenues(params) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/search?" +
      querystring.stringify(params) +
      "&" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Get Details of a Venue : /docs/api/venues/details
  getVenue({ venue_id }) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/" +
      venue_id +
      "?" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Get a Venue's Photos : /docs/api/venues/photos
  getVenuePhotos({ venue_id }) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/" +
      venue_id +
      "/photos?" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Get a Venue's Tips : /docs/api/venues/tips
  getVenueTips({ venue_id }) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/" +
      venue_id +
      "/tips?" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Suggest Completion - /docs/api/venues/suggestcompletion
  suggestCompletion(params) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/suggestcompletion?" +
      querystring.stringify(params) +
      "&" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Get a Venue's Hours - /docs/api/venues/hours
  getVenueHours({ venue_id }) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/" +
      venue_id +
      "/hours?" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Get a Venue's Hours - /docs/api/venues/hours
  getVenueMenu({ venue_id }) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/" +
      venue_id +
      "/menu?" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Get a Venue's Links - /docs/api/venues/links
  getVenueLinks({ venue_id }) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/" +
      venue_id +
      "/links?" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Get Similar Venues - /docs/api/venues/similar
  getSimilarVenues({ venue_id }) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/" +
      venue_id +
      "/similar?" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Get Next Venues - /docs/api/venues/nextvenues
  getNextVenues({ venue_id }) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/" +
      venue_id +
      "/nextvenues?" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
  // Get Lists a Venue is On - /docs/api/venues/listed
  getListVenueIsOn({ venue_id }) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/" +
      venue_id +
      "/listed?" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
}

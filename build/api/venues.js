"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _querystring = _interopRequireDefault(require("querystring"));

var _request = _interopRequireDefault(require("../services/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Venues {
  constructor({
    apiUrl,
    apiFeature,
    credentials
  }) {
    this.apiUrl = apiUrl;
    this.apiFeature = apiFeature;
    this.credentials = credentials;
  } // Docs base path: https://developer.foursquare.com/
  // Get Venue Categories : /docs/api/venues/categories


  categories() {
    const urlString = this.apiUrl + this.apiFeature + "/categories?" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Get Venue Recommendations : docs/api/venues/explore


  explore(params) {
    const urlString = this.apiUrl + this.apiFeature + "/explore?" + _querystring.default.stringify(params) + "&" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Get Venue Recommendations : /docs/api/venues/recommendations


  recommendations(params) {
    const urlString = this.apiUrl + "/search/recommendations?" + _querystring.default.stringify(params) + "&" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Get Trending Venues : /docs/api/venues/trending


  trending(params) {
    const urlString = this.apiUrl + this.apiFeature + "/trending?" + _querystring.default.stringify(params) + "&" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Search for Venues : /docs/api/venues/search


  getVenues(params) {
    const urlString = this.apiUrl + this.apiFeature + "/search?" + _querystring.default.stringify(params) + "&" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Get Details of a Venue : /docs/api/venues/details


  getVenue({
    venue_id
  }) {
    const urlString = this.apiUrl + this.apiFeature + "/" + venue_id + "?" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Get a Venue's Photos : /docs/api/venues/photos


  getVenuePhotos({
    venue_id
  }) {
    const urlString = this.apiUrl + this.apiFeature + "/" + venue_id + "/photos?" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Get a Venue's Tips : /docs/api/venues/tips


  getVenueTips({
    venue_id
  }) {
    const urlString = this.apiUrl + this.apiFeature + "/" + venue_id + "/tips?" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Suggest Completion - /docs/api/venues/suggestcompletion


  suggestCompletion(params) {
    const urlString = this.apiUrl + this.apiFeature + "/suggestcompletion?" + _querystring.default.stringify(params) + "&" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Get a Venue's Hours - /docs/api/venues/hours


  getVenueHours({
    venue_id
  }) {
    const urlString = this.apiUrl + this.apiFeature + "/" + venue_id + "/hours?" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Get a Venue's Hours - /docs/api/venues/hours


  getVenueMenu({
    venue_id
  }) {
    const urlString = this.apiUrl + this.apiFeature + "/" + venue_id + "/menu?" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Get a Venue's Links - /docs/api/venues/links


  getVenueLinks({
    venue_id
  }) {
    const urlString = this.apiUrl + this.apiFeature + "/" + venue_id + "/links?" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Get Similar Venues - /docs/api/venues/similar


  getSimilarVenues({
    venue_id
  }) {
    const urlString = this.apiUrl + this.apiFeature + "/" + venue_id + "/similar?" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Get Next Venues - /docs/api/venues/nextvenues


  getNextVenues({
    venue_id
  }) {
    const urlString = this.apiUrl + this.apiFeature + "/" + venue_id + "/nextvenues?" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  } // Get Lists a Venue is On - /docs/api/venues/listed


  getListVenueIsOn({
    venue_id
  }) {
    const urlString = this.apiUrl + this.apiFeature + "/" + venue_id + "/listed?" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  }

}

exports.default = Venues;
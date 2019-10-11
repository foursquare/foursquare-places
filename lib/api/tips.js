import querystring from "querystring";
import request from "../services/request";

export default class Tips {
  constructor({ apiUrl, apiFeature, credentials }) {
    this.apiUrl = apiUrl;
    this.apiFeature = apiFeature;
    this.credentials = credentials;
  }
  // Docs base path: https://developer.foursquare.com/
  // Get Details of a Tip : /docs/api/tips/details
  getTip(tipId) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/" +
      tipId +
      "?" +
      querystring.stringify(this.credentials);
    return request(urlString);
  }
}

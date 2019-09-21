import querystring from "querystring";
import request from "../services/request";

export default class tips {
  constructor(config) {
    this.config = config;
  }
  // Docs base path: https://developer.foursquare.com/
  // Get Details of a Tip : /docs/api/tips/details
  getTip(tipId) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/" +
      tipId +
      "?" +
      querystring.stringify(this.config.credentials);
    console.log(urlString);
    return request(urlString);
  }
}

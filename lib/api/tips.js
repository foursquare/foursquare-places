import querystring from "querystring";
import request from "../services/request";

export default class tips {
  constructor(config, apiFeature = "/tips") {
    this.config = Object.assign(config, {
      apiFeature
    });
  }
  // Docs base path: https://developer.foursquare.com/
  // Get Details of a Photos : /docs/api/photos/details
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

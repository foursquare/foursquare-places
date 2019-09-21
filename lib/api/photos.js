import querystring from "querystring";
import request from "../services/request";

export default class Photos {
  constructor(config) {
    this.config = config;
  }
  // Docs base path: https://developer.foursquare.com/
  // Get Details of a Photos : /docs/api/photos/details
  getPhoto(photoId) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/" +
      photoId +
      "?" +
      querystring.stringify(this.config.credentials);
    console.log(urlString);
    return request(urlString);
  }
}

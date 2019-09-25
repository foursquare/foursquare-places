import querystring from "querystring";
import request from "../services/request";

export default class Photos {
  constructor({ apiUrl, apiFeature, credentials }) {
    this.apiUrl = apiUrl;
    this.apiFeature = apiFeature;
    this.credentials = credentials;
  }
  // Docs base path: https://developer.foursquare.com/
  // Get Details of a Photos : /docs/api/photos/details
  getPhoto(photoId) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/" +
      photoId +
      "?" +
      querystring.stringify(this.credentials);
    console.log(urlString);
    return request(urlString);
  }
}

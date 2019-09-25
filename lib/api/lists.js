import querystring from "querystring";
import request from "../services/request";

export default class Lists {
  constructor({ apiUrl, apiFeature, credentials }) {
    this.apiUrl = apiUrl;
    this.apiFeature = apiFeature;
    this.credentials = credentials;
  }
  // Docs base path: https://developer.foursquare.com/
  // Get Details of a List : /docs/api/lists/details
  getList(listId) {
    const urlString =
      this.apiUrl +
      this.apiFeature +
      "/" +
      listId +
      "?" +
      querystring.stringify(this.credentials);
    console.log(urlString);
    return request(urlString);
  }
}

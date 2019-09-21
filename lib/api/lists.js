import querystring from "querystring";
import request from "../services/request";

export default class Lists {
  constructor(config) {
    this.config = config;
  }
  // Docs base path: https://developer.foursquare.com/
  // Get Details of a List : /docs/api/lists/details
  getList(listId) {
    const urlString =
      this.config.apiUrl +
      this.config.apiFeature +
      "/" +
      listId +
      "?" +
      querystring.stringify(this.config.credentials);
    console.log(urlString);
    return request(urlString);
  }
}

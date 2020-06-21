"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = require("./api");

class Foursquare {
  constructor(client_id, client_secret, version = "20171001", apiUrl = "https://api.foursquare.com/v2", locale = "en") {
    const credentials = {
      client_id,
      client_secret,
      v: version
    };
    this.venuesInstance = new _api.Venues({
      credentials,
      apiUrl,
      locale,
      apiFeature: "/venues"
    });
    this.photosInstance = new _api.Photos({
      credentials,
      apiUrl,
      locale,
      apiFeature: "/photos"
    });
    this.tipsInstance = new _api.Tips({
      credentials,
      apiUrl,
      locale,
      apiFeature: "/tips"
    });
    this.listsInstance = new _api.Lists({
      credentials,
      apiUrl,
      locale,
      apiFeature: "/lists"
    });
  }

  get venues() {
    return this.venuesInstance;
  }

  get photos() {
    return this.photosInstance;
  }

  get tips() {
    return this.tipsInstance;
  }

  get lists() {
    return this.listsInstance;
  }

}

exports.default = Foursquare;
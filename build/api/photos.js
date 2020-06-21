"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _querystring = _interopRequireDefault(require("querystring"));

var _request = _interopRequireDefault(require("../services/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Photos {
  constructor({
    apiUrl,
    apiFeature,
    credentials
  }) {
    this.apiUrl = apiUrl;
    this.apiFeature = apiFeature;
    this.credentials = credentials;
  } // Docs base path: https://developer.foursquare.com/
  // Get Details of a Photos : /docs/api/photos/details


  getPhoto(photoId) {
    const urlString = this.apiUrl + this.apiFeature + "/" + photoId + "?" + _querystring.default.stringify(this.credentials);

    return (0, _request.default)(urlString);
  }

}

exports.default = Photos;
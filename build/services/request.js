"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async urlString => {
  try {
    const {
      data
    } = await _axios.default.get(urlString);
    return data;
  } catch (error) {
    throw error;
  }
};

exports.default = _default;
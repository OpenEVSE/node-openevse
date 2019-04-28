
/* jshint node: true, esversion: 6*/

"use strict";

const debug = require("debug")("openevse:OpenEVSEError");

module.exports = class OpenEVSEError {
  constructor(type, message = "") {
    debug("Error "+type+": "+message);
    this.type = type;
    this.message = message;
  }
};

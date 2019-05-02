/* jshint node: true, esversion: 6*/

"use strict";

const EventEmitter = require("events");

//const debug = require("debug")("openevse:OpenEVSEDriver");

module.exports = class OpenEVSEDriver extends EventEmitter
{
  constructor() {
    super();
  }
};


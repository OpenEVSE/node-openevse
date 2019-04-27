/* jshint node: true, esversion: 6*/

"use strict";

//const debug = require("debug")("openevse:OpenEVSERequest");

module.export = class OpenEVSERequest
{
  constructor()
  {
    this._done = () => {};
    this._error = () => {};
    this._always = () => {};
  }

  done(fn) {
    this._done = fn;
    return this;
  }

  error(fn) {
    this._error = fn;
    return this;
  }

  always(fn) {
    this._always = fn;
    return this;
  }
};

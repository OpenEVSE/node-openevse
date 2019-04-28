/* jshint node: true, esversion: 6*/

"use strict";

const OpenEVSEDriver = require("./OpenEVSEDriver");
const OpenEVSERequest = require("./OpenEVSERequest");
const simulator = require("./simulator_driver");

//const debug = require("debug")("openevse:OpenEVSEDriverSimulator");

module.exports = class OpenEVSEDriverSimulator extends OpenEVSEDriver
{
  constructor()
  {
    super();
    simulator.onevent((data) => {
      var eventData = data.split(" ");
      var event = eventData.shift();
      this.emit(event, eventData);
    });

    // Hook for testing
    this.lastCommand = false;
  }

  rapi(command, callback = () => {})
  {
    this.lastCommand = command;
    var request = new OpenEVSERequest();
    setTimeout(() => {
      callback(simulator.rapi(command));
      request._always();
    }, 1);

    return request;
  }
};

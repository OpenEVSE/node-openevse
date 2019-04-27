/* jshint node: true, esversion: 6*/

"use strict";

const OpenEVSEDriver = require("OpenEVSEDriver");
const OpenEVSERequest = require("OpenEVSERequest");
const simulator = require("./simulator_driver");

//const debug = require("debug")("openevse:OpenEVSEDriverSimulator");

module.export = class OpenEVSEDriverSimulator extends OpenEVSEDriver
{
  constructor()
  {
    super();
    simulator.onevent((data) => {
      var eventData = data.split(" ");
      var event = eventData.shift();
      this.emit(event, eventData);
    });
  }

  rapi(command, callback = () => {})
  {
    var request = new OpenEVSERequest();
    setTimeout(() => {
      callback(simulator.rapi(command));
      request._always();
    }, 1);

    return request;
  }
};

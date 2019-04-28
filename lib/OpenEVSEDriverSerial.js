/* jshint node: true, esversion: 6*/

"use strict";

const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;

const OpenEVSEDriver = require("./OpenEVSEDriver");
const OpenEVSERequest = require("./OpenEVSERequest");

//const debug = require("debug")("openevse:OpenEVSEDriverSerial");

module.exports = class OpenEVSEDriverSerial extends OpenEVSEDriver
{
  constructor(endpoint)
  {
    super();
    this.serial = new SerialPort(endpoint, {
      baudRate: 115200
    });

    const parser = new Readline({ delimiter: "\r" });
    this.serial.pipe(parser);

    this.requests = [];
    parser.on("data", (data) => {
      if(data.startsWith("$OK") || data.startsWith("$NK"))
      {
        if(this.requests.length > 0)
        {
          var request = this.requests.pop();
          request.callback(data);
          request.request._always();
        }
      }
      else
      {
        var eventData = data.split(" ");
        var event = eventData.shift();
        this.emit(event, eventData);
      }
    });
  }

  rapi(command, callback = () => {})
  {
    var request = new OpenEVSERequest();
    this.serial.write(command+"\r");
    this.requests.push({
      callback: callback,
      request: request
    });

    return request;
  }
};

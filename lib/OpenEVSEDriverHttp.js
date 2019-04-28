/* jshint node: true, esversion: 6*/

"use strict";

const OpenEVSEDriver = require("./OpenEVSEDriver");
const OpenEVSEError = require("./OpenEVSEError");
const OpenEVSERequest = require("./OpenEVSERequest");

//const debug = require("debug")("openevse:OpenEVSEDriverHttp");

module.exports = class OpenEVSEDriverHttp extends OpenEVSEDriver
{
  constructor(endpoint)
  {
    super();
    this._endpoint = endpoint;
    if (endpoint.substring(0, 5) === "https") { this.http = require("https"); }
    else { this.http = require("http"); }
  }

  rapi(command, callback = () => {})
  {
    var request = new OpenEVSERequest();
    var url = this._endpoint + "?json=1&rapi="+encodeURI(command);
    this.http.get(url, (res) => {
      res.setEncoding("utf8");
      var body = "";

      res.on("data", (chunk) => {
        body += chunk;
      });

      res.on("end", () => {
        var data;
        try {
          data = JSON.parse(body);
          callback(data.ret);
          request._always();
        }
        catch (e) {
          request._error(new OpenEVSEError("BadBody", body));
          request._always();
        }
      }).on("error", () => {
        request._error(new OpenEVSEError("RequestFailed"));
        request._always();
      }).setTimeout(6000, () => {
        request._error(new OpenEVSEError("HTTPTimeout"));
        request._always();
      });
    });

    return request;
  }
};

"use strict";

var expect = require("chai").expect;
var openevse = require("../lib/openevse");

describe("#openevse", function() {
  it("should get the flags state", function() {
    var evse = openevse.connect("simulator");
    evse.flags((flags) => {
      expect(flags.service_level).to.equal(1);
      expect(flags.diode_check).to.equal(true);
      expect(flags.vent_required).to.equal(true);
      expect(flags.ground_check).to.equal(true);
      expect(flags.stuck_relay_check).to.equal(true);
      expect(flags.auto_service_level).to.equal(false);
      expect(flags.auto_start).to.equal(true);
      expect(flags.serial_debug).to.equal(false);
      expect(flags.lcd_type).to.equal("rgb");
      expect(flags.gfi_self_test).to.equal(true);
      expect(flags.temp_check).to.equal(true);
    });
  });

});

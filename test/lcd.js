/* jshint node: true, esversion: 6*/

"use strict";

const chai = require("chai");
const expect = chai.expect;
const openevse = require("../lib/openevse");

describe("#openevse (LCD)", function() {
  it("should claim the LCD", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_claim(() => {
      expect(evse._driver.lastCommand).to.equal("$F0 0^42");
      done();
    }, true).error((err) => {
      done(err);
    });
  });

  it("should release the LCD", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_claim(() => {
      expect(evse._driver.lastCommand).to.equal("$F0 1^43");
      done();
    }, false).error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight OFF (by name)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 0^30");
      done();
    }, "off").error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight OFF (by number)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 0^30");
      done();
    }, 0).error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight RED (by name)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 1^31");
      done();
    }, "red").error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight RED (by number)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 1^31");
      done();
    }, 1).error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight GREEN (by name)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 2^32");
      done();
    }, "green").error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight GREEN (by number)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 2^32");
      done();
    }, 2).error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight YELLOW (by name)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 3^33");
      done();
    }, "yellow").error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight YELLOW (by number)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 3^33");
      done();
    }, 3).error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight BLUE (by name)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 4^34");
      done();
    }, "blue").error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight BLUE (by number)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 4^34");
      done();
    }, 4).error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight VIOLET (by name)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 5^35");
      done();
    }, "violet").error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight VIOLET (by number)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 5^35");
      done();
    }, 5).error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight TEAL (by name)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 6^36");
      done();
    }, "teal").error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight TEAL (by number)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 6^36");
      done();
    }, 6).error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight WHITE (by name)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 7^37");
      done();
    }, "white").error((err) => {
      done(err);
    });
  });

  it("should set the LCD Backlight WHITE (by number)", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      expect(evse._driver.lastCommand).to.equal("$FB 7^37");
      done();
    }, 7).error((err) => {
      done(err);
    });
  });

  it("should not set the LCD Backlight to invalid names", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      done(false);
    }, "XXXXX").error(function (err) {
      expect(err.type).to.equal("OperationFailed");
      done();
    });
  });

  it("should not set the LCD Backlight to invalid numbers", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_set_backlight(() => {
      done(false);
    }, 99).error(function (err) {
      expect(err.type).to.equal("OperationFailed");
      done();
    });
  });

  it("should print text on the LCD", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_print_text(() => {
      expect(evse._driver.lastCommand).to.equal("$FP 0 0 Hello World^32");
      done();
    }, 0, 0, "Hello World").error((err) => {
      done(err);
    });
  });

  it("should not print text at an invalid row", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_print_text(() => {
      done(false);
    }, 0, 50, "Hello World").error(function (err) {
      expect(err.type).to.equal("OperationFailed");
      done().error((err) => {
        done(err);
      });
    });
  });

  it("should not print text at an invalid column", function(done) {
    var evse = openevse.connect("simulator");
    evse.lcd_print_text(() => {
      done(false);
    }, 50, 0, "Hello World").error(function (err) {
      expect(err.type).to.equal("OperationFailed");
      done();
    });
  });
});

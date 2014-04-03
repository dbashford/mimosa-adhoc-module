"use strict";

var config = require( "./config" );

var registration = function( mimosaConfig, register ) {
  mimosaConfig.adhocModule.modules.forEach( function( mod ) {
    mod.registration( mimosaConfig, register );
  });
};

module.exports = {
  registration: registration,
  defaults:     config.defaults,
  placeholder:  config.placeholder,
  validate:     config.validate
};

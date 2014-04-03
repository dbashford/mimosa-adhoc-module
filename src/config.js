"use strict";

exports.defaults = function() {
  return {
    adhocModule: {
      modules: []
    }
  };
};

exports.placeholder = function () {
  var ph = "\n\n  adhocModule:     # config for adhocModule module\n" +
      "    modules: []    # An array of 'require' calls. The code `require`d in must expose a\n" +
      "                   # 'registration' function. For information on the 'registration'\n" +
      "                   # function and how to use it, see virtually any Mimosa module,\n" +
      "                   # including this one.\n";

  return ph;
};

exports.validate = function ( config, validators ) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "adhocModule config", config.adhocModule ) ) {
    config.adhocModule.modules.forEach( function( mod ) {
      if ( !mod.registration ) {
        errors.push( "All adhocModule.modules must export a 'registration' function." );
      }
    });
  }

  return errors;
};

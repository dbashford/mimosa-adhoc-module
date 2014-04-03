mimosa-adhoc-module
===========
## Overview

This module allows for linking node code in your app, or on your file system, directly into a Mimosa workflow.  This is great for small one off tasks that don't make sense as NPM modules.

For more information regarding Mimosa, see http://mimosa.io.

## Usage

Add `'adhoc-module'` to your list of modules. Mimosa will install the module for you when you start up.

## Functionality

This module forwards registation and workflow functions on to your code, allowing local code to be directly linked into Mimosa's workflows.

## Default Config

```javascript
adhocModule: {
  modules: []
}
```

* `modules`: An array of `require` calls. The code `require`d in must expose a `registration` function. For information on the `registration` function and how to use it, see virtually any Mimosa module. [Here's a simple one.](https://github.com/dbashford/mimosa-handlebars-on-window/blob/master/src/index.js#L26-L28)

## Example Config

```javascript
adhocModule: {
  modules: [require('./scripts/module1'), require('./scripts/module2')]
}
```

## Example code to require

```javascript
var _execute = function( mimosaConfig, options, next ) {
  // do something appropriate for "beforeInstall", like copy files around
  // or transform files before installing them somewhere
  next();
}

exports.registration = function( mimosaConfig, register ) {
  if ( mimosaConfig.isBuild ) {
    register( ["postBuild"], "beforeInstall", _execute );
  }
};
```
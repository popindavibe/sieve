/*
 * The contents of this file are licensed. You may obtain a copy of
 * the license at https://github.com/thsmi/sieve/ or request it via
 * email from the author.
 *
 * Do not remove or change this comment.
 *
 * The initial author of the code is:
 *   Thomas Schmid <schmid-thomas@gmx.net>
 *
 */

/* global window */

"use strict";

(function (exports) {

  /* global SieveLexer */
  /* global SieveAbstractElement */

  function SieveRegExMatch(docshell, id) {
    SieveAbstractElement.call(this, docshell, id);
  }

  SieveRegExMatch.prototype = Object.create(SieveAbstractElement.prototype);
  SieveRegExMatch.prototype.constructor = SieveRegExMatch;

  SieveRegExMatch.nodeName = function () {
    return "match-type/regex";
  };

  SieveRegExMatch.nodeType = function () {
    return "match-type/";
  };

  SieveRegExMatch.isElement
    = function (parser, lexer) {
      if (parser.startsWith(":regex"))
        return true;

      return false;
    };

  SieveRegExMatch.isCapable = function (capabilities) {
    return (capabilities["regex"] === true);
  };

  SieveRegExMatch.prototype.require
    = function (imports) {
      imports["regex"] = true;
    };

  SieveRegExMatch.prototype.init
    = function (parser) {
      parser.extract(":regex");
      return this;
    };

  SieveRegExMatch.prototype.toScript
    = function () {
      return ":regex";
    };

  /* *****************************************************************************/

  if (!SieveLexer)
    throw new Error("Could not register MatchTypes");

  SieveLexer.register(SieveRegExMatch);

})(window);

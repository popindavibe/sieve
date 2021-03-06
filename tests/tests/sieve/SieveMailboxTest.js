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


(function () {

  "use strict";

  /* global net */

  let suite = net.tschmid.yautt.test;

  if (!suite)
    throw new Error("Could not initialize test suite");

  suite.add(function () {
    suite.log("Sieve Mailbox (RFC5490) unit tests...");
  });

  suite.add(function () {
    suite.log("Testing fileinto :create");

    let script = ""
      + 'require "fileinto";\r\n'
      + 'require "mailbox";\r\n'
      + '\r\n'
      + 'if header :contains ["from"] "coyote" {\r\n'
      + '   fileinto :create "INBOX.harassment";\r\n'
      + '}\r\n';

    suite.expectValidScript(script, { "fileinto": true, "mailbox": true });
  });

  suite.add(function () {
    suite.log("Testing mailboxexists");

    let script = ""
      + 'require ["fileinto", "mailbox"];\r\n'
      + 'if mailboxexists "Partners" {\r\n'
      + '   fileinto "Partners";\r\n'
      + '} else {\r\n'
      + '   keep;\r\n'
      + '}\r\n';

    suite.expectValidScript(script, { "fileinto": true, "mailbox": true });
  });

  suite.add(function () {
    suite.log("Testing metadataexists");

    let script = ""
      + 'require ["mboxmetadata"];\r\n'
      + '\r\n'
      + 'if metadataexists "mailbox" "annotations" {\r\n'
      + '    keep;\r\n'
      + '}\r\n';
    suite.expectValidScript(script, { "mboxmetadata": true });
  });


  suite.add(function () {
    suite.log("Testing metadata");

    let script = ""
      + 'require ["mboxmetadata"];\r\n'
      + '\r\n'
      + 'if metadata :is "INBOX"\r\n'
      + '   "/private/vendor/vendor.isode/auto-replies" "on" {\r\n'
      + '\r\n'
      + 'keep;\r\n'
      + '\r\n'
      + '#    vacation text:\r\n'
      + '#I\'m away on holidays till March 2009.\r\n'
      + '#Expect a delay.\r\n'
      + '#.\r\n'
      + '}\r\n';

    suite.expectValidScript(script, { "mboxmetadata": true });
  });

  suite.add(function () {
    suite.log("Testing servermetadataexists");

    let script = ""
      + 'require ["servermetadata"];\r\n'
      + '\r\n'
      + 'if servermetadataexists "test" {\r\n'
      + '    keep;\r\n'
      + '}\r\n';
    suite.expectValidScript(script, { "servermetadata": true });
  });

  suite.add(function () {
    suite.log("Testing servermetadata");

    let script = ""
      + 'require ["servermetadata"];\r\n'
      + '\r\n'
      + 'if servermetadata :matches\r\n'
      + '   "/private/vendor/vendor.isode/notification-uri" "*" {\r\n'
      + '    #set "notif_uri" "${0}";\r\n'
      + '}\r\n';
    suite.expectValidScript(script, { "servermetadata": true });
  });

})();


// Tests for links methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from "meteor/meteor";
import { describe, it, beforeEach } from "meteor/practicalmeteor:mocha";
import { assert } from "meteor/practicalmeteor:chai";

import { Links } from "./";
import "./methods.js";

if (Meteor.isServer) {
  describe("links methods", function () {
    beforeEach(function () {
      Links.remove({});
    });

    it("can add a new link", function () {
      const addLink = Meteor.server.method_handlers["links.insert"];

      addLink.apply({}, ["meteor.com", "https://www.meteor.com"]);

      assert.equal(Links.find().count(), 1);
    });
  });
}

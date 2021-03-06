// Tests for the links publications
//
// https://guide.meteor.com/testing.html

import { describe, it, beforeEach } from "meteor/practicalmeteor:mocha";
import { assert } from "meteor/practicalmeteor:chai";
import { PublicationCollector } from "meteor/johanbrook:publication-collector";

import { Links } from "../";
import "./publications.js";

describe("links publications", function () {
  beforeEach(function () {
    Links.remove({});
    Links.insert({
      title: "meteor homepage",
      url: "https://www.meteor.com",
    });
  });

  describe("links.all", function () {
    it("sends all links", function (done) {
      const collector = new PublicationCollector();
      collector.collect("links.all", (collections) => {
        assert.equal(collections.links.length, 1);
        done();
      });
    });
  });
});

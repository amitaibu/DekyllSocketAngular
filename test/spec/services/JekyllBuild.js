'use strict';

describe('Service: JekyllBuild', function () {

  // load the service's module
  beforeEach(module('DrupalSocketAngularApp'));

  // instantiate service
  var JekyllBuild;
  beforeEach(inject(function (_JekyllBuild_) {
    JekyllBuild = _JekyllBuild_;
  }));

  it('should do something', function () {
    expect(!!JekyllBuild).toBe(true);
  });

});

'use strict';

describe('Directive: dekyllEdit', function () {

  // load the directive's module
  beforeEach(module('DrupalSocketAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dekyll-edit></dekyll-edit>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dekyllEdit directive');
  }));
});

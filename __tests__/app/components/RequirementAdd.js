jest.dontMock('app/components/RequirementAdd');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Component = require('app/components/RequirementAdd');

describe('app/components/RequirementAdd', function () {
  it('should render title field', function () {
    var html = React.renderToStaticMarkup(<Component />);
    var actual = /<input type="text" placeholder="Add Requirement">/.test(html);
    expect(actual).toBe(true);
  });
});

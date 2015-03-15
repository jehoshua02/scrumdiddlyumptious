jest.dontMock('app/components/RequirementForm');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Component = require('app/components/RequirementForm');

describe('app/components/RequirementForm', function () {
  it('should render title field', function () {
    var html = React.renderToStaticMarkup(<Component />);
    var actual = /requirement-form__title/.test(html);
    expect(actual).toBe(true);
  });

  it('should render description field', function () {
    var html = React.renderToStaticMarkup(<Component />);
    var actual = /requirement-form__description/.test(html);
    expect(actual).toBe(true);
  });

  it('should render save button', function () {
    var html = React.renderToStaticMarkup(<Component />);
    var actual = /requirement-form__save-button/.test(html);
    expect(actual).toBe(true);
  });
});

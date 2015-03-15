jest.mock('app/actions');
var Actions = require('app/actions');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
jest.dontMock('app/components/RequirementForm');
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

  it('should call REQUIREMENT_SAVE action on save button click with correct data', function () {
    var component = TestUtils.renderIntoDocument(<Component />);

    // fill in title
    var title = TestUtils.findRenderedDOMComponentWithClass(
      component, 'requirement-form__title'
    );
    title.getDOMNode().value = 'Test Title';

    // fill in description
    var description = TestUtils.findRenderedDOMComponentWithClass(
      component, 'requirement-form__description'
    );
    description.getDOMNode().value = 'Test description';

    // click save button
    var button = TestUtils.findRenderedDOMComponentWithClass(
      component, 'requirement-form__save-button'
    );
    TestUtils.SimulateNative.click(button);

    // assert
    console.log('======== In Test: `console.log(Actions.REQUIREMENT_SAVE)` ========');
    console.log(Actions.REQUIREMENT_SAVE);

    expect(Actions.REQUIREMENT_SAVE).toBeCalled();
  });

});

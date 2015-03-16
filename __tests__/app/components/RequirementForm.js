describe('app/components/RequirementForm', function () {

  // it('should render title field', function () {
  //   var React = require('react');
  //   var Component = require('app/components/RequirementForm');

  //   var html = React.renderToStaticMarkup(<Component />);
  //   var actual = /requirement-form__title/.test(html);

  //   expect(actual).toBe(true);
  // });

  // it('should render description field', function () {
  //   var React = require('react');
  //   var Component = require('app/components/RequirementForm');

  //   var html = React.renderToStaticMarkup(<Component />);
  //   var actual = /requirement-form__description/.test(html);

  //   expect(actual).toBe(true);
  // });

  // it('should render save button', function () {
  //   var React = require('react');
  //   var Component = require('app/components/RequirementForm');

  //   var html = React.renderToStaticMarkup(<Component />);
  //   var actual = /requirement-form__save-button/.test(html);

  //   expect(actual).toBe(true);
  // });

  it('should call REQUIREMENT_SAVE action on save button click with correct data', function () {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    jest.mock('app/actions');
    jest.dontMock('app/components/RequirementForm');
    var Component = require('app/components/RequirementForm');
    var Actions = require('app/actions');
    console.log({ActionsMocked: Actions.REQUIREMENT_SAVE._isMockFunction});
    console.log({ComponentMocked: Component._isMockFunction});

    expect(Actions.REQUIREMENT_SAVE._isMockFunction).toBe(true);
    expect(Component._isMockFunction).toBe(undefined);


    // render component
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
    TestUtils.Simulate.click(button);

    expect(Actions.REQUIREMENT_SAVE).toBeCalled();
  });

});

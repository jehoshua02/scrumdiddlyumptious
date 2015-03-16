describe('jest', function () {

  it('should mock actions', function () {
    jest.mock('app/actions');
    var Actions = require('app/actions');

    expect(Actions.REQUIREMENT_SAVE._isMockFunction).toBe(true);
  });

  it('should not mock component', function () {
    jest.dontMock('app/components/RequirementForm');
    var Component = require('app/components/RequirementForm');

    expect(Component._isMockFunction).toBe(undefined);
  });

  it('should mock actions but not component', function () {
    jest.mock('app/actions');
    jest.dontMock('app/components/RequirementForm');
    var Component = require('app/components/RequirementForm');
    var Actions = require('app/actions');

    expect(Actions.REQUIREMENT_SAVE._isMockFunction).toBe(true);
    expect(Component._isMockFunction).toBe(undefined);
  });

  it('should not mock me (when I flip jest statements)', function () {
    jest.dontMock('app/components/RequirementForm');
    jest.mock('app/actions');
    var Component = require('app/components/RequirementForm');
    var Actions = require('app/actions');

    expect(Actions.REQUIREMENT_SAVE._isMockFunction).toBe(true);
    expect(Component._isMockFunction).toBe(undefined);
  });

  it('should be awesome and work like it should', function () {
    var awesome = true;
    var works = false;
    expect(awesome && works).toBe(true);
  });

});

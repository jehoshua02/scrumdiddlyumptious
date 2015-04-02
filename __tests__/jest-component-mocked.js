jest.dontMock('app/components/RequirementForm');

describe('jest', function () {
  it('should mock actions', function () {
    // jest.mock('app/actions');   <-- Jest mocks by default
    var Actions = require('app/actions');
    expect(Actions.REQUIREMENT_SAVE._isMockFunction).toBe(true);
  });

  it('should not mock component', function () {
    var Component = require('app/components/RequirementForm');
    expect(Component._isMockFunction).toBe(undefined);
  });

  it('should mock actions but not component', function () {
    var Component = require('app/components/RequirementForm');
    var Actions = require('app/actions');

    expect(Actions.REQUIREMENT_SAVE._isMockFunction).toBe(true);
    expect(Component._isMockFunction).toBe(undefined);
  });
  
  it('should be awesome and work like it should', function () {
    var awesome = true;
    var works = true; //maybe?? 
    expect(awesome && works).toBe(true);
  });

});

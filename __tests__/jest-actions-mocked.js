jest.dontMock('app/components/RequirementForm');
describe('jest', function () {
  it('should mock actions', function () {
    // jest.mock('app/actions');   <-- Jest mocks by default
    var Actions = require('app/actions');
    expect(Actions.REQUIREMENT_SAVE._isMockFunction).toBe(true);
  });

  it('should not mock me (when I flip jest statements)', function () {
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
var refluxMock = jest.genMockFromModule('reflux');
function mockCreateActions(actionNames){
    var mockActions = {},
        i = 0;
    for(;i < actionNames.length; i++){
        mockActions[actionNames[i]]= jest.genMockFn();
    }
    return  mockActions;
}
function mockCreateStore(storeObject){
    storeObject.trigger = jest.genMockFn(); 
    storeObject.joinTrailing = jest.genMockFn();
    return storeObject;
}
refluxMock.createActions.mockImplementation(mockCreateActions);
refluxMock.createStore.mockImplementation(mockCreateStore);
module.exports = refluxMock;
const utilityFunctions = {
  createReducer,
  insertItemInArray,
  removeItemInArray,
  updateItemInArray,
  updateObject
};

function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map(item => {
    if (item.id !== itemId) {
      return item;
    }
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });
  return updatedItems;
}

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

function insertItemInArray(array, action) {
  return [
    ...array.slice(0, action.index),
    action.item,
    ...array.slice(action.index)
  ];
}

function removeItemInArray(array, action) {
  return [...array.slice(0, action.index), ...array.slice(action.index + 1)];
}

export default utilityFunctions;

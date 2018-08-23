import actionType from './actionType';
//fucntion to generate action
const actionGenerator = (type, ...actionEntries) => {
  return (...args) => {
    const action = { type };
    actionEntries.forEach((arg, index) => {
      action[actionEntries[index]] = args[index]
    })
    return action;
  }
}
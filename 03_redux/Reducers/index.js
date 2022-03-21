const counter = (previousState = 0, action) => {
    switch(action.type){
      case 'INCREMENT':
        return previousState + 1
      case 'DECREMENT':
        return previousState - 1
      default:
        return previousState
    }
};

export default counter
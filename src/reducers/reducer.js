import CONSTANTS from '../constant/constant';

export default function mainReducer(state = {name: "Hello"}, action) {
  switch (action.type) {
    case CONSTANTS.FETCH_USER:{
     
      return Object.assign({}, state, {rowData: action.payload});
    } 
    case CONSTANTS.FETCH_HEADER:{
    
      return Object.assign({}, state, {columnDefs: action.payload});
    }    
    case CONSTANTS.ADD_TODO:{
      return addToDo(state, action)
          
    }

    case "TEST_ACTION": {
      let temp =  Object.assign({}, state, {name: "Well"});
      return temp;
    }
    default: 
      return state
   
      
    
  }
  return state;
}


function addToDo(state, action) {
  let existingToDos = JSON.parse(JSON.stringify(state.rowData));
  existingToDos.push(action.payload);
  return Object.assign({}, state, {rowData: existingToDos});
}
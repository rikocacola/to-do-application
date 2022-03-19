const listReducer = (lists = [], action) => {
  switch(action.type){
    case 'FETCH_ALL_LISTS':
      return action.payload
    case 'CREATE_LIST':
      return [...lists, action.payload]
    case 'UPDATE_LIST':
      return lists.map((list) => list.id === action.payload.id ? action.payload : list)
    case 'MOVE_STATUS':
      console.log(lists)
      return lists.map((list) => list.id === action.payload ? list = {...list, status: 1} : list)
    case 'DELETE_LIST':
      return lists.filter((list) => list.id !== action.payload);
    default:
      return lists
  }
}

export default listReducer;

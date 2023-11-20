const initialState = {
    list : []
}



export const todoReducer = (state = initialState, action) => {
   switch(action.type){
      case "ADD_TODO":
       const {id, data} = action.payload;
      return{
        ...state,
        list : [
            ...state.list,
            {
            id: id,
            data: data
        }]
      }
      
      case "DELETE_TODO":
        const filteredList = state.list.filter((item) => item.id !== action.id)
       
        return {
            ...state,
           list: filteredList
        }
     
    case "REMOVE_TODO":
        return {
            ...state,
            list: []
        }
    
      default:
        return state;
   }
}
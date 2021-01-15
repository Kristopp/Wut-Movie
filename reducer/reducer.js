export const initalState = {
    initalMovies: [],
    user: null,
    dbAccsessToken: null,
  };
  
  //Selector
  
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_INITAL_LIST":
        console.log(action.payload)
      return { 
        ...state,
        initalMovies: action.payload
      }
        default:
          return state;
        }
      };
  
  export default reducer;
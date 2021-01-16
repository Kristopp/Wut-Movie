export const initalState = {
    initalMovies: [],
    weekelyTrending: [],
    user: null,
    dbAccsessToken: null,
  };
  
  //Selector
  
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_TRENDING_WEEKLY":
       let reduceArray = action.payload.slice(0, 7)
      return { 
        ...state,
        weekelyTrending: reduceArray
      }
      case "GET_INITAL_LIST":
      return { 
        ...state,
        initalMovies: action.payload
      }
        default:
          return state;
        }
      };
  
  export default reducer;
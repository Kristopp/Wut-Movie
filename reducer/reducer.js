export const initalState = {
    initalMovies: [],
    dayilTrending: [],
    user: null,
    dbAccsessToken: null,
  };
  
  //Selector
  
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_TRENDING_DAYILY":
      return { 
        ...state,
        dayilTrending: action.payload
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
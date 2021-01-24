export const initalState = {
    initalPopularMovies: [],
    weekelyTrending: [],
    weekelyTrendingTvShows: [],
    user: null,
    dbAccsessToken: null,
    pageCounter: 1,
  };
  
  //Selector
  
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_TRENDING_WEEKLY":
       let reduceArrayMovies = action.payload.slice(1, 7)
      return { 
        ...state,
        weekelyTrending: reduceArrayMovies
      }
      case "GET_TRENDING_WEEKLY_TV":
       let reduceArrayTv = action.payload.slice(0, 7)
      return { 
        ...state,
        weekelyTrendingTvShows: reduceArrayTv
      }
      case "GET_INITAL_LIST":
        console.log(action.payload)
      return { 
        ...state,
        initalPopularMovies: action.payload
      }
        default:
          return state;
        }
      };
  
  export default reducer;
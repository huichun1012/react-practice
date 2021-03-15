import { combineReducers } from "redux";
import postsReducers from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  // if you don't have any reducers for now, add this to remove the error message
  //   toBeReplace: () => "to be replace",
  posts: postsReducers,
  users: usersReducer,
});

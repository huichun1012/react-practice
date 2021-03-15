import _ from "lodash";
import jsonplaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); // make sure it waits until the posts succesfully fetched, or else the following codes won't run correctly
  // const userIds = _.uniq(_.map(getState().posts, "userId")); // find out user id uniquely
  // userIds.forEach((id) => dispatch(fetchUser(id)));
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispath) => {
  const response = await jsonplaceholder.get("/posts");
  dispath({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

// non-lodash memoize approach
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};

/**  lodash memoize approach
{side effect: if you want to re-fetch the user data once again,
saying you know that the user data might be changed for the api,
you cannot call the api by the same function
instead, you have to call it via another function not declaring as memoize function}*/
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// });

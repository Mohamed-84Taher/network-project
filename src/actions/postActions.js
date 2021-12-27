import { ADD_COMMENT, ADD_POST, REMOVE_COMMENT, REMOVE_POST } from "../types";

// action add post
export const addPost = formData => {
  return {
    type: ADD_POST,
    payload: formData,
  };
};
// action delete post
export const deletePost = id => {
  return {
    type: REMOVE_POST,
    payload: id,
  };
};

// action add comment
export const addComment = (formData, postId) => {
  return {
    type: ADD_COMMENT,
    payload: {
      formData,
      postId,
    },
  };
};

// action delete comment
export const deleteComment = (postId, commentId) => {
  return {
    type: REMOVE_COMMENT,
    payload: {
      postId,
      commentId,
    },
  };
};

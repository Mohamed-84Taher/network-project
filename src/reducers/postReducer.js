import { ADD_COMMENT, ADD_POST, REMOVE_COMMENT, REMOVE_POST } from "../types";

const initState = [
  {
    postId: "1",
    text: "how are you ?",
    userId: "2",
    comments: [
      {
        commentId: "1",
        userId: "2",
        text: "I am fine",
        date: "26/12/2021 10:12:34",
      },
      {
        commentId: "2",
        userId: "1",
        text: "me too thanks",
        date: "26/12/2021 10:04:53",
      },
    ],
    date: "[26/12/2021 9:20:11]",
  },
  {
    postId: "2",
    text: "hello everybody,how are you doing ?",
    userId: "1",
    comments: [
      {
        commentId: "1",
        userId: "1",
        text: "I'm fine thank you",
        date: "26/12/2021 13:45:26",
      },
      {
        commentId: "2",
        userId: "2",
        text: "yes me too thanks",
        date: "26/12/2021 13:36:26",
      },
    ],
    date: "[26/12/2021 13:35:26]",
  },
];

function postReducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_POST:
      return [payload, ...state];
    case REMOVE_POST:
      return state.filter(post => post.postId !== payload);
    case ADD_COMMENT:
      return state.map(post =>
        post.postId === payload.postId
          ? { ...post, comments: [payload.formData, ...post.comments] }
          : post
      );
    case REMOVE_COMMENT:
      return state.map(post =>
        post.postId === payload.postId
          ? {
              ...post,
              comments: post.comments.filter(
                comment => comment.commentId !== payload.commentId
              ),
            }
          : post
      );
    default:
      return state;
  }
}

export default postReducer;

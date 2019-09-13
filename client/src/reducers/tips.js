import {
  ADD_TIP,
  GET_TIPS,
  UPDATE_TIP,
  GET_USERTIPS,
  UPDATE_LIKES,
  UPDATE_UNLIKES
} from "../actions/types";

const initialState = {
  current: [],
  loading: true
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TIP:
      return {
        ...state,
        current: [payload, ...state.current]
      };
    case UPDATE_TIP:
      return {
        ...state,
        current: state.current.map((tip, index) => {
          if (tip._id === payload._id) {
            return {
              ...tip,
              status: payload.status,
              current: payload.current
            };
          }
          return tip;
        })
      };
    case UPDATE_LIKES:
      console.log(payload);
      return {
        ...state,
        current: state.current.map(tip =>
          tip._id === payload.id
            ? {
                ...tip,
                votes: {
                  likes: payload.likes,
                  unLikes: tip.votes.unLikes
                }
              }
            : tip
        )
      };
    case UPDATE_UNLIKES:
      console.log(payload);
      return {
        ...state,
        current: state.current.map(tip =>
          tip._id === payload.id
            ? {
                ...tip,
                votes: {
                  likes: tip.votes.likes,
                  unLikes: payload.unLikes
                }
              }
            : tip
        )
      };
    case GET_TIPS:
      return {
        ...state,
        current: payload,
        loading: false
        // usertips: []
      };
    case GET_USERTIPS:
      return {
        ...state,
        userTips: {
          tips: payload,
          loading: false
        }
      };
    case "VOTE":
      return {
        ...state,
        tips: state.tips.map((tip, index) => {
          // Find the tip with the matching id
          if (tip.id === action.payload.id) {
            // Return a new object
            switch (action.payload.operation) {
              case "like":
                return {
                  ...tip, // copy the existing tip
                  likes: tip.likes + 1,
                  probability:
                    (
                      ((tip.likes + 1) / (tip.likes + 1 + tip.unLikes)) *
                      100
                    ).toFixed(0) + "%",
                  voted: true
                };
              case "unLike":
                return {
                  ...tip, // copy the existing tip
                  unLikes: tip.unLikes + 1,
                  probability:
                    ((tip.likes / (tip.likes + 1 + tip.unLikes)) * 100).toFixed(
                      0
                    ) + "%",
                  voted: true
                };
              default:
                return {
                  ...tip
                };
            }
          }
          // Leave every other tip unchanged
          return tip;
        })
      };

    default:
      return state;
  }
};

export default rootReducer;

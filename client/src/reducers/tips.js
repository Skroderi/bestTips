import { ADD_TIP } from "../actions/types";

const initialState = {
  current: [],
  history: []
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);

  switch (type) {
    case ADD_TIP:
      return {
        ...state,
        current: payload
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

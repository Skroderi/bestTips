const initialState = {
  tips: [
    {
      category: "football",
      id: 0,
      firstTeam: "Arsenal",
      secondTeam: "Chelsea",
      date: "21.08.2019",
      time: "21:00",
      betOn: "1",
      odd: 1.85,
      likes: 2,
      unLikes: 2,
      probability: "50%",
      voted: false,
      author: "Bociu"
    },
    {
      category: "tennis",
      id: 2,
      firstTeam: "Federer R.",
      secondTeam: "Djokovic N.",
      date: "05.10.2019",
      time: "13:00",
      betOn: "1",
      odd: 2.2,
      likes: 10,
      unLikes: 2,
      probability: "80%",
      author: "Bociu"
    },
    {
      category: "football",
      id: 3,
      firstTeam: "Atletico Madryt",
      secondTeam: "Barcelona",
      date: "21.08.2019",
      time: "21:00",
      betOn: "2",
      odd: 2.45,
      likes: 10,
      unLikes: 2,
      probability: "80%",
      author: "Zygmunt"
    },
    {
      category: "football",
      id: 4,
      firstTeam: "Liverpool",
      secondTeam: "Chelsea",
      date: "21.02.2019",
      time: "18:00",
      betOn: "1",
      odd: 2.05,
      likes: 10,
      unLikes: 2,
      probability: "80%",
      author: "Bociu"
    },
    {
      category: "hockey",
      id: 5,
      firstTeam: "Nashville Predators",
      secondTeam: "Dallas Stars",
      date: "24.04.2019",
      time: "02:00",
      betOn: "2",
      odd: 2.8,
      likes: 10,
      unLikes: 2,
      probability: "80%",
      author: "Bociu"
    },
    {
      category: "football",
      id: 6,
      firstTeam: "Arsenal",
      secondTeam: "Chelsea",
      date: "21.08.2019",
      time: "21:00",
      betOn: "1",
      odd: 1.85,
      likes: 10,
      unLikes: 2,
      probability: "80%",
      author: "Bociu"
    }
  ],
  historyTips: [
    {
      category: "football",
      firstTeam: "history1",
      secondTeam: "history2",
      date: "21.08.2019",
      time: "21:00",
      betOn: "1",
      odd: 1.85,
      likes: 5,
      unLikes: 5,
      probability: "80%",
      author: "Bociu"
    },
    {
      category: "tennis",
      firstTeam: "history tenis test1",
      secondTeam: "history2",
      date: "21.08.2019",
      time: "21:00",
      betOn: "1",
      odd: 1.85,
      likes: 10,
      unLikes: 2,
      probability: "80%",
      author: "Bociu"
    },
    {
      category: "hockey",
      firstTeam: "history1 hockey",
      secondTeam: "history2",
      date: "21.08.2019",
      time: "21:00",
      betOn: "1",
      odd: 1.85,
      likes: 2,
      unLikes: 10,
      probability: "80%",
      author: "Bociu"
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TIP":
      console.log("reducer");
      return {
        tips: [...state.tips, action.payload.tip]
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
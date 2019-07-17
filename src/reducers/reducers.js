const initialState = {
  tips: [
    {
      category: "football",
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
    },
    {
      category: "football",
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
      category: "football",
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
  ]
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default rootReducer;

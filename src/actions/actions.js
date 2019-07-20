export const addTip = (
  tipContext,
  category,
  firstTeam,
  secondTeam,
  odd,
  author
) => {
  const getId = () => `_${(Math.random(), toString(36).substr(2, 9))}`;
  console.log("dziala");

  return {
    type: "ADD_TIP",
    payload: {
      tip: {
        id: getId(),
        ...tipContext
      }
    }
  };
};

//  {
//     category: "football",
//     firstTeam: "Arsenal",
//     secondTeam: "Chelsea",
//     date: "21.08.2019",
//     time: "21:00",
//     betOn: "1",
//     odd: 1.85,
//     likes: 10,
//     unLikes: 2,
//     probability: "80%",
//     author: "Bociu"
//   }

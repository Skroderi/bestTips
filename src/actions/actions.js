export const addTip = tipContext => {
  console.log(tipContext);

  //generate random id
  const getId = () => `_${(Math.random(), toString(36).substr(2, 9))}`;

  return {
    type: "ADD_TIP",
    payload: {
      tip: {
        ...tipContext,
        id: getId()
      }
    }
  };
};

export const vote = id => {
  console.log(id);
  return {
    type: "VOTE",
    payload: { id: id }
  };
};

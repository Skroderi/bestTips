import React from "react";
import styled from "styled-components";
import TipCard from "components/molecules/TipCard/TipCard";

const StyledTable = styled.table`
  width: 80%;
  max-width: 1000px;
  margin-top: 300px;
  border: 2px solid black;
  text-align: center;
  margin: 250px auto;
`;

const StyledTipCard = styled(TipCard)`
  &:nth-child(even) {
    background-color: grey;
  }
`;

const TableTemplate = () => {
  const tips = [
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
  ];

  return (
    <StyledTable>
      <tr>
        <th>Category</th>
        <th>Match</th>
        <th>ODD</th>
        <th>Votes</th>
        <th>Author</th>
      </tr>
      {tips.map(tip => (
        <TipCard tip={tip} />
      ))}
    </StyledTable>
  );
};

export default TableTemplate;

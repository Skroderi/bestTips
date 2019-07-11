import React from "react";
import styled, { css } from "styled-components";
import footballIcon from "assets/icons/football.svg";
import { ThumbsUp } from "styled-icons/fa-solid/ThumbsUp";
import { ThumbsDown } from "styled-icons/fa-solid/ThumbsDown";

const StyledTr = styled.tr`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  border: 2px solid black;
  justify-content: space-between;
  padding: 5px 0px;
`;

const StyledCategoryTip = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${footballIcon});
  margin-left: 10px;
`;

const StyledTeamsContainer = styled.div``;

const StyledDate = styled.div`
  display: block;
`;
const StyledVoteContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const GreenThumb = styled(ThumbsUp)`
  color: green;
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  cursor: pointer;
`;
const RedThumb = styled(ThumbsDown)`
  color: red;
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  cursor: pointer;
`;

const StyledThumbContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledAuthor = styled.a`
  display: block;
  margin-right: 10px;
`;
const Vote = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: green;
  margin: 0px 5px;
  ${props =>
    props.red &&
    css`
      color: red;
    `}
`;

const ResultVote = styled.div`
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: green;
  margin-top: 5px;
`;
const TipCard = () => {
  return (
    <StyledTr>
      <StyledCategoryTip />
      <StyledTeamsContainer>
        Team1 vs Team2
        <StyledDate>
          <i>21.05.2012 21:00</i>
        </StyledDate>
      </StyledTeamsContainer>
      <span>1.84</span>
      <StyledVoteContainer>
        <StyledThumbContainer>
          <Vote>10</Vote>
          <GreenThumb />
          <RedThumb />
          <Vote red>2</Vote>
        </StyledThumbContainer>
        <ResultVote>80%</ResultVote>
      </StyledVoteContainer>
      <StyledAuthor href="/">Skroderi</StyledAuthor>
    </StyledTr>
  );
};

export default TipCard;

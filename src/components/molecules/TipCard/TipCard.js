import React from "react";
import styled, { css } from "styled-components";
import footballIcon from "assets/icons/football.svg";
import { ThumbsUp } from "styled-icons/fa-solid/ThumbsUp";
import { ThumbsDown } from "styled-icons/fa-solid/ThumbsDown";

const StyledWrapper = styled.tr`
  margin: 20px 0;
`;

const StyledCategoryTip = styled.td`
  width: 50px;
  height: 50px;
  background-image: url(${footballIcon});
  background-repeat: no-repeat;
  background-size: 70% 70%;
  margin: 0 auto;
  background-position: 50% 50%;
`;

const StyledTeamsContainer = styled.td`
  font-size: 22px;
  font-weight: bold;
`;

const StyledDate = styled.div`
  display: block;
  font-size: 18px;
  font-weight: 500;
`;
const StyledVoteContainer = styled.td`
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

const StyledOdd = styled.td`
  font-weight: bold;
`;
const StyledAuthor = styled.td`
  font-weight: bold;
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
const TipCard = props => {
  const {
    firstTeam,
    secondTeam,
    date,
    author,
    betOn,
    category,
    odd,
    likes,
    unLikes,
    probability,
    time
  } = props.tip;
  return (
    <StyledWrapper>
      <StyledCategoryTip />
      <StyledTeamsContainer>
        {firstTeam} - {secondTeam}
        <StyledDate>
          <i>
            {date} {time}
          </i>
        </StyledDate>
      </StyledTeamsContainer>
      <td>{betOn}</td>
      <StyledOdd>{odd}</StyledOdd>
      <StyledVoteContainer>
        <StyledThumbContainer>
          <Vote>{likes}</Vote>
          <GreenThumb />
          <RedThumb />
          <Vote red>{unLikes}</Vote>
        </StyledThumbContainer>
        <ResultVote>{probability}</ResultVote>
      </StyledVoteContainer>
      <StyledAuthor>
        <a href="/">{author}</a>
      </StyledAuthor>
    </StyledWrapper>
  );
};

export default TipCard;

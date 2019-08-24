import React from "react";
import MediaQuery from "react-responsive";
import PropTypes from "prop-types";
import { ThumbsUp } from "styled-icons/fa-solid/ThumbsUp";
import { ThumbsDown } from "styled-icons/fa-solid/ThumbsDown";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledCategoryTip = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${({ theme, category }) => theme.icons[category]});
  background-repeat: no-repeat;
  background-size: 35px;
  background-position: 50% 50%;
  margin: 0 auto;
`;

const StyledTeamsContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const StyledDate = styled.div`
  display: block;
  font-size: 12px;
  font-weight: 500;
`;
const StyledVoteContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const UpThumb = styled(ThumbsUp)`
  color: grey;
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  cursor: pointer;
`;
const DownThumb = styled(ThumbsDown)`
  color: grey;
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  cursor: pointer;
`;

const StyledThumbContainer = styled.div`
  margin: 0 auto;
`;

const StyledParagraph = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const Vote = styled.span`
  font-size: 14px;
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
  font-size: 20px;
  font-weight: bold;
  color: green;
`;
const StyledMatch = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
`;
const StyledDiv = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 5px 0;
`;
const WrapperStyledDiv = styled.div`
  text-align: center;
  font-weight: bold;
`;

const MobileTipCard = ({ tip, vote, action }) => {
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
    time,
    id
  } = tip;
  let { voted } = tip;

  return (
    <MediaQuery query="(max-device-width: 500px)">
      <td>
        <StyledCategoryTip category={category} />
      </td>
      <td>
        <StyledMatch>
          <StyledTeamsContainer>
            {firstTeam} - {secondTeam}
            <StyledDate>
              <i>
                {date} - {time}
              </i>
            </StyledDate>
          </StyledTeamsContainer>
          <StyledDiv>
            <WrapperStyledDiv>
              BET: <StyledParagraph>{betOn}</StyledParagraph>
            </WrapperStyledDiv>
            <WrapperStyledDiv>
              ODD: <StyledParagraph> {odd}</StyledParagraph>
            </WrapperStyledDiv>
          </StyledDiv>
          <ResultVote>{probability}</ResultVote>
          <StyledVoteContainer>
            <StyledThumbContainer>
              <Vote>{likes}</Vote>
              <UpThumb
                onClick={!voted ? () => vote(id, (action = "like")) : null}
                style={!voted ? { color: "green" } : { color: "grey" }}
              />
              <DownThumb
                onClick={!voted ? () => vote(id, (action = "unLike")) : null}
                style={!voted ? { color: "red" } : { color: "grey" }}
              />

              <Vote red>{unLikes}</Vote>
            </StyledThumbContainer>
          </StyledVoteContainer>
          <StyledParagraph>
            <Link to={"/user/" + author}>{author}</Link>
          </StyledParagraph>
        </StyledMatch>
      </td>
    </MediaQuery>
  );
};
MobileTipCard.propTypes = {
  tip: PropTypes.object.isRequired,
  vote: PropTypes.func.isRequired,
  action: PropTypes.string
};
export default MobileTipCard;

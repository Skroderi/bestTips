import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { vote } from "actions/actions";
import { ThumbsUp } from "styled-icons/fa-solid/ThumbsUp";
import { ThumbsDown } from "styled-icons/fa-solid/ThumbsDown";

const StyledWrapper = styled.tr`
  margin: 20px 0;
`;

const StyledCategoryTip = styled.td`
  width: 50px;
  background-image: url(${({ theme, category }) => theme.icons[category]});
  background-repeat: no-repeat;
  background-size: 50% 50%;
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
  margin: 15px 0;
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

const StyledParagraph = styled.td`
  font-weight: bold;
  font-size: 18px;
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
    time,
    id
  } = props.tip;
  console.log(props.vote);

  return (
    <StyledWrapper>
      <StyledCategoryTip category={category} />
      <StyledTeamsContainer>
        {firstTeam} - {secondTeam}
        <StyledDate>
          <i>
            {date} - {time}
          </i>
        </StyledDate>
      </StyledTeamsContainer>
      <StyledParagraph>{betOn}</StyledParagraph>
      <StyledParagraph>{odd}</StyledParagraph>
      <StyledVoteContainer>
        <StyledThumbContainer>
          <Vote>{likes}</Vote>
          <GreenThumb onClick={() => props.vote(id)} />
          <RedThumb />
          <Vote red>{unLikes}</Vote>
        </StyledThumbContainer>
        <ResultVote>{probability}</ResultVote>
      </StyledVoteContainer>
      <StyledParagraph>
        <Link to={"/user/" + author}>{author}</Link>
      </StyledParagraph>
    </StyledWrapper>
  );
};

TipCard.propTypes = {
  category: PropTypes.oneOf(["football", "tennis", "hockey"])
};

const mapDispatchToProps = dispatch => ({
  vote: id => dispatch(vote(id))
});

export default connect(
  null,
  mapDispatchToProps
)(TipCard);

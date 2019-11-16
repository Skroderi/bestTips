import React from "react";
import MediaQuery from "react-responsive";
import PropTypes from "prop-types";
import { ThumbsUp } from "styled-icons/fa-solid/ThumbsUp";
import { ThumbsDown } from "styled-icons/fa-solid/ThumbsDown";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { updateTip } from "../../../actions/tip";
import { addLike } from "../../../actions/tip";
import { unLike } from "../../../actions/tip";
import { Check } from "styled-icons/boxicons-regular/Check";
import { Equals } from "styled-icons/typicons/Equals";
import { Cross } from "styled-icons/icomoon/Cross";
import { connect } from "react-redux";
import Moment from "react-moment";

const StyledCheck = styled(Check)`
  color: green;
  border-radius: 50%;
  border: 1px solid;
  cursor: pointer;
`;

const StyledEquals = styled(Equals)`
  color: orange;
  border-radius: 50%;
  border: 1px solid;
  margin: 0 2px;
  cursor: pointer;
`;

const StyledCross = styled(Cross)`
  color: red;
  border-radius: 50%;
  border: 1px solid;
  padding: 1px;
  cursor: pointer;
`;

const StyledActions = styled.div`
  display: block;
`;

const StyledCategoryTip = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${({ theme, category }) => theme.icons[category]});
  background-repeat: no-repeat;
  background-size: 35px;
  background-position: 50% 50%;
  margin: 0 auto;
  margin-left: 5px;
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

const MobileTipCard = ({ tip, updateTip, status, auth, addLike, unLike }) => {
  const {
    firstTeam,
    secondTeam,
    date,
    author,
    betOn,
    category,
    odd,
    probability,
    time,
    _id,
    user,
    current,
    votes
  } = tip;

  let userId =
    !auth.isAuthenticated || auth.user === null ? null : auth.user._id;

  const voted =
    userId === null
      ? true
      : tip.votes.likes.filter(like => like.user.toString() === userId).length >
          0 ||
        tip.votes.unLikes.filter(like => like.user.toString() === userId)
          .length > 0
      ? true
      : false;

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
                <Moment format="DD-MM-YYYY">{date}</Moment> - {time}
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

          {current ? (
            <StyledVoteContainer>
              <StyledThumbContainer>
                <Vote>{votes.likes.length}</Vote>
                <UpThumb
                  onClick={() => addLike(_id)}
                  style={
                    !voted
                      ? { color: "green" }
                      : { color: "grey", cursor: "auto" }
                  }
                />
                <DownThumb
                  onClick={() => unLike(_id)}
                  // onClick={!voted ? () => vote(id, (action = "unLike")) : null}
                  style={
                    !voted
                      ? { color: "red" }
                      : { color: "grey", cursor: "auto" }
                  }
                />

                <Vote red>{votes.unLikes.length}</Vote>
              </StyledThumbContainer>
            </StyledVoteContainer>
          ) : null}

          <StyledParagraph>
            <Link to={"/user/" + author}>{author}</Link>
            {auth.isAuthenticated &&
            auth.user !== null &&
            auth.user._id === user &&
            current ? (
              <StyledActions>
                <StyledCheck
                  size="20"
                  title="Win"
                  onClick={() => updateTip(_id, "win")}
                />
                <StyledEquals
                  size="20"
                  title="Return"
                  onClick={() => updateTip(_id, "return")}
                />
                <StyledCross
                  size="20"
                  title="Lose"
                  onClick={() => updateTip(_id, "lose")}
                />
              </StyledActions>
            ) : null}
          </StyledParagraph>
        </StyledMatch>
      </td>
    </MediaQuery>
  );
};
MobileTipCard.propTypes = {
  tip: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  unLike: PropTypes.func.isRequired,
  updateTip: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { updateTip, addLike, unLike })(
  MobileTipCard
);

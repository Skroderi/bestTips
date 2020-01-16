import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 350px;
  margin: 0 auto;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const StyledParagraph = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

const StyledNumber = styled.span`
  display: block;
  font-size: 18px;
  text-align: Center;
`;

function UserStats({ userTips, userName }) {
  const win = userTips.tips.filter(tip => tip.status === "win");
  const returns = userTips.tips.filter(tip => tip.status === "return");
  const lose = userTips.tips.filter(tip => tip.status === "lose");

  return (
    <InnerWrapper>
      <div>
        <StyledParagraph style={{ color: "green" }}>
          Wins:<StyledNumber>{win.length}</StyledNumber>
        </StyledParagraph>
      </div>
      <div>
        <StyledParagraph style={{ color: "orange" }}>
          Returns:<StyledNumber>{returns.length}</StyledNumber>
        </StyledParagraph>
      </div>
      <div>
        <StyledParagraph style={{ color: "red" }}>
          Loses:<StyledNumber>{lose.length}</StyledNumber>
        </StyledParagraph>
      </div>
    </InnerWrapper>
  );
}

UserStats.propTypes = {
  userName: PropTypes.string.isRequired,
  userTips: PropTypes.object.isRequired
};

export default UserStats;
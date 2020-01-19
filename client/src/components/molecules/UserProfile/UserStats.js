import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
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
  const groupBy = userTips.tips.reduce((status, tip) => {
    status[tip.status] = [...(status[tip.status] || []), tip];
    return status;
  }, {});

  return (
    <InnerWrapper>
      <div>
        <StyledParagraph style={{ color: "green" }}>
          Wins:
          <StyledNumber>{groupBy.win ? groupBy.win.length : "0"}</StyledNumber>
        </StyledParagraph>
      </div>
      <div>
        <StyledParagraph style={{ color: "orange" }}>
          Returns:
          <StyledNumber>
            {groupBy.return ? groupBy.return.length : "0"}
          </StyledNumber>
        </StyledParagraph>
      </div>
      <div>
        <StyledParagraph style={{ color: "red" }}>
          Loses:
          <StyledNumber>
            {groupBy.lose ? groupBy.lose.length : "0"}
          </StyledNumber>
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

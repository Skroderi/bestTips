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

function UserStats({ tips, userName }) {
  const win = tips.current.filter(
    tip => tip.author === userName && tip.status === "win"
  );
  const returns = tips.current.filter(
    tip => tip.author === userName && tip.status === "return"
  );
  const lose = tips.current.filter(
    tip => tip.author === userName && tip.status === "lose"
  );

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
  tips: PropTypes.object.isRequired
};

export default UserStats;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MobileTipCard from "./MobileTipCard";
import DeskoptTipCard from "./DeskoptTipCard";

const StyledThread = styled.tr`
  background: ${({ theme, tip }) => theme.tipStatus[tip.status]};
`;

const TipCard = ({ tip }, action) => {
  return (
    <StyledThread tip={tip}>
      <MobileTipCard tip={tip} />
      <DeskoptTipCard tip={tip} />
    </StyledThread>
  );
};

TipCard.propTypes = {
  tip: PropTypes.object.isRequired,
  action: PropTypes.string
};

export default TipCard;

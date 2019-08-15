import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

const StyledAlert = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 1.5rem;
  margin: 1rem 0;
  opacity: 0.9;
  color: #333;
  background: ${({ color }) => (color === "fail" ? "red" : "green")};
  color: #fff;
  border-radius: 20px;
`;

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <StyledAlert key={alert.id} color={alert.alertType}>
      {alert.msg}
    </StyledAlert>
  ));
Alert.PropTypes = {
  alerts: PropTypes.array.isRequired
};
const mapStateToPops = state => ({
  alerts: state.alert
});

export default connect(mapStateToPops)(Alert);

import styled, { css } from "styled-components";
import lockIcon from "assets/icons/lock.svg";
import signInIcon from "assets/icons/sign.svg";
import calendar from "assets/icons/calendar.svg";
import clock from "assets/icons/clock.svg";
import mail from "assets/icons/mail.svg";

const Input = styled.input`
  display: block;
  width: 75%;
  padding: 12px 30px;
  background-size: 17px 17px;
  background-position: 4% 50%;
  background-repeat: no-repeat;
  border-radius: 20px;
  border: none;
  text-indent: 15px;
  background-color: hsl(0,0%,96%);
  font-size:10px;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  ${props =>
    props.password &&
    css`
      background-image: url(${lockIcon});
    `}
    ${props =>
      props.sign &&
      css`
        background-image: url(${signInIcon});
      `}
      ${props =>
        props.mail &&
        css`
          background-image: url(${mail});
        `}
  ${props =>
    props.team &&
    css`
      width: 110px;
      padding: 8px 8px;
      border-radius: 0px;
      background-image: none;
      text-indent: 0px;
    `}

    ${props =>
      props.odd &&
      css`
        width: 100px;
        padding: 8px 8px;
        border-radius: 0px;
        background-image: none;
        text-indent: 0px;
      `}

      ${props =>
        props.bet &&
        css`
          width: 100px;
          padding: 8px 8px;
          border-radius: 0px;
          background-image: none;
          text-indent: 0px;
        `}
    ${props =>
      props.datediv &&
      css`
        width: 160px;
        padding: 8px 8px;
        border-radius: 0px;
        background-image: url(${calendar});
        background-size: 20px;
        text-indent: 20px;
      `}
      ${props =>
        props.time &&
        css`
          width: 110px;
          padding: 8px 0px;
          border-radius: 0px;
          background-image: url(${clock});
          background-size: 20px;
          text-indent: 20px;
        `}
        
`;
export default Input;

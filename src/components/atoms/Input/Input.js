import styled, { css } from "styled-components";
import lockIcon from "assets/icons/lock.svg";
import signInIcon from "assets/icons/sign.svg";

const Input = styled.input`
  display: block;
  width: 240px;
  padding: 15px 30px;
  background-image: url(${signInIcon});
  background-size: 17px 17px;
  background-position: 4% 50%;
  background-repeat: no-repeat;
  border-radius: 20px;
  background-color: #fff;
  border: none;
  text-indent: 20px;
  margin: 10px 0px;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  ${props =>
    props.password &&
    css`
      background-image: url(${lockIcon});
    `}
`;

export default Input;

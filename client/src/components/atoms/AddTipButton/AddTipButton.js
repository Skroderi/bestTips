import styled, { keyframes, css } from "styled-components";

const RotateAddTipButton = keyframes`
  0% {
    transform:rotate(0deg)
  }
 
  100% {
    transform:rotate(225deg)
  }
`;

const AddTipButton = styled.button`
  display: block;
  position: fixed;
  right: 15px;
  bottom: 15px;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 4px solid black;
  transform: rotate(${({ isActive }) => (isActive ? "225deg" : "0deg")});
  transition: transform 0.25s ease-in-out;
  cursor: pointer;
  z-index: 998;
`;

export default AddTipButton;

import styled from "styled-components";

const ButtonIcon = styled.button`
  display: block;
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 50px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  background-color: white;
  border: 4px solid black;
  transform: rotate(${({ isActive }) => (isActive ? "225deg" : "0deg")});
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
`;

export default ButtonIcon;

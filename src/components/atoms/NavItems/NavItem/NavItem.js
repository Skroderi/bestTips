import styled from "styled-components";

const NavItem = styled.a`
  color: white;
  margin: 10 20px;
  font-size: 30px;
  padding: 10px 20px;
  border-radius: 15px;
  transition: 0.3s;
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    border: 3px solid white;
  }
  &.active {
    border: 3px solid white;
  }
`;

export default NavItem;

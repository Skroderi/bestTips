import styled from "styled-components";

const NavItem = styled.a`
  color: black;
  margin: 10 20px;
  font-size: 30px;
  padding: 10px 20px;
  border-radius: 15px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: white;
  }
`;

export default NavItem;

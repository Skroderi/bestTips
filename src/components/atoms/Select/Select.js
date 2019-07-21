import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
const StyledSelect = styled.select`
  margin: 0 auto;
  width: 200px;
  height: 30px;
  background-color: hsl(0, 0%, 96%);
`;

const SelectCategory = () => {
  return (
    <StyledSelect>
      <option value="Football">Football</option>
      <option value="Tenis">Tenis</option>
      <option value="hockey">Hockey</option>
    </StyledSelect>
  );
};

export default SelectCategory;

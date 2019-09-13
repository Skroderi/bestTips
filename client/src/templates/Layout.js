import React from "react";
import styled from "styled-components";
import GlobalStye from "theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/mainTheme";
const MainWrapper = styled.div`
  position: relative;
`;
const Layout = ({ children }) => {
  return (
    <MainWrapper>
      <GlobalStye />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MainWrapper>
  );
};

export default Layout;

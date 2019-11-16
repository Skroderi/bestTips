import football from "assets/icons/football.svg";
import hockey from "assets/icons/hockeyIcon.svg";
import tennis from "assets/icons/tennisIcon.svg";

export const theme = {
  light: 300,
  bold: 600,
  topNavHeight: "70px",
  icons: {
    football,
    hockey,
    tennis
  },
  tipStatus: {
    win: "hsl(122, 96%, 49%, .8) ",
    lose: "hsl(3, 100%, 48%, .8)",
    return: "hsl(60, 96%, 55%, .8)"
  },
  colors: {
    white: "#ffffff",
    red: "red",
    lightBlue: "#04da97",
    orange: "hsl(49, 100%, 58%)",
    black: "hsl(0, 0%, 0%)",
    tableTh: "rgba(0, 0, 0, 0.08)"
  },
  fontSize: {
    xxs: "1rem",
    xs: "1.2rem",
    s: "1.6rem",
    m: "2.1rem",
    l: "2.4rem",
    xl: "4rem"
  },
  media: {
    semitablet: "@media (min-width: 420px)",
    tablet: "@media (min-width: 768px)",
    desktop: "@media (min-width: 1024px)"
  },
  card: `1px 2px 4px #04da97, 1px 2px 4px #04da97`
};

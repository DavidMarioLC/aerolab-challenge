import { DefaultTheme } from "styled-components";
const aerolabTheme: DefaultTheme = {
  colors: {
    neutral: {
      900: "#252F3D",
      600: "#7C899C",
      500: "#8FA3BF",
      300: "#DAE4F2",
      200: "#E6EDF7",
      100: "#F5F9FF",
      0: "#FFFFFF",
    },
    brand: {
      default: "linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)",
      hover: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)",
      light: "#E5F0FF",
      light2: "#CCE1FF",
    },
    green: {
      default: "#29CC74",
      light: "#CCFFE3",
    },
    red: {
      default: "#E07F4F",
      light: "#FFDFD9",
    },
    specials: {
      illustrationBg:
        "linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)",
      sectionBg:
        " linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)",
      aerolab: "linear-gradient(180deg, #FF8800 0%, #FF6600 100%)",
    },
  },
  typography: {
    montserrat: "Montserrat",
  },
  fontSize: {
    title: {
      xl: "12.5rem", //200px
      lg: "6rem", //96px
      md: "3rem", //48px
      sm: "2rem", //32px
      xs: "1.5rem", //24px
    },
    text: {
      large: "1.125rem", //18px
      md: "1rem", //16px
      sm: "0.875rem", //14px
      xs: "0.75rem", //12px
    },
  },
};

export { aerolabTheme };

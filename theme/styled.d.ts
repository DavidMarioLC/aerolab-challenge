// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      neutral: {
        900: string;
        600: string;
        500: string;
        300: string;
        200: string;
        100: string;
        0: string;
      };
      brand: {
        default: string;
        hover: string;
        light: string;
        light2: string;
      };
      green: {
        default: string;
        light: string;
      };
      red: {
        default: string;
        light: string;
      };
      specials: {
        illustrationBg: string;
        sectionBg: string;
        aerolab: string;
      };
    };
    typography: {
      montserrat: string;
    };
    fontSize: {
      title: {
        200: string;
        96: string;
        48: string;
        32: string;
        24: string;
      };
      text: {
        18: string;
        16: string;
        14: string;
        12: string;
      };
    };
  }
}

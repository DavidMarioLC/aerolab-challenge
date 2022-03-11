import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { aerolabTheme } from "../theme/theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={aerolabTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

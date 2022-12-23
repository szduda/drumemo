import { css, Global } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        color: #313948;
        background: #f8f8f7;
      }

      * {
        box-sizing: border-box;
        font-family: Verdana, sans-serif;
      }
    `}
  />
);

/** @jsxImportSource @emotion/react */

import { FC, ReactNode } from "react";
import { css } from "@emotion/react";
import { GlobalStyles } from "./GlobalStyles";

type Props = {
  children: ReactNode;
};

export const Theme: FC<Props> = ({ children }) => (
  <Wrapper>
    <GlobalStyles />
    {children}
  </Wrapper>
);

const Wrapper = (props) => (
  <div
    {...props}
    css={css`
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
  />
);

/** @jsxImportSource @emotion/react */

import { FC, useMemo } from "react";
import { css } from "@emotion/react";
import { parseLine } from "../../helpers";
import { Bar } from "..";

type Props = {
  notes: string;
};

export const BarPrinter: FC<Props> = ({ notes }) =>
  useMemo(
    () => (
      <Wrapper>
        {notes.split("\n").map((line, index) => (
          <LineWrapper key={line + index}>
            {parseLine(line).map((bar, barIndex) => (
              <Bar key={bar + barIndex} notes={bar} />
            ))}
          </LineWrapper>
        ))}
      </Wrapper>
    ),
    [notes]
  );

const Wrapper = (props) => (
  <div
    {...props}
    css={css`
      width: 100%;
      max-width: 640px;
      margin: 48px 0;
    `}
  />
);

const LineWrapper = (props) => (
  <div
    {...props}
    css={css`
      width: 100%;
      display: flex;
      margin: 0 0 24px;
      justify-content: center;
    `}
  />
);

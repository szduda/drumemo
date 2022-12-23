/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { css } from "@emotion/react";
import { HITS, HIT_REGEX } from "../../helpers";

type Props = {
  notes: string;
};

export const Bar: FC<Props> = ({ notes }) => (
  <Wrapper>
    {notes
      .split(HIT_REGEX)
      .filter(Boolean)
      .map((hit, index) =>
        hit === HITS.PAUSE ? (
          <Hit key={"pause" + index} />
        ) : (
          <Hit
            key={hit + index}
            label={hit[hit.length - 1]}
            divider={getDivider(hit)}
          />
        )
      )}
  </Wrapper>
);

const getDivider = (hit) =>
  hit?.length > 1 ? ([...hit][0] === HITS.TREMOLO ? 8 : 6) : 4;

const Wrapper = (props) => (
  <div
    {...props}
    css={css`
      width: 100%;
      display: inline-flex;
      max-width: 135px;
      border-left: 4px solid #9a9aa0;
      border-right: 4px solid #9a9aa0;
      border-top: 2px solid #9a9aa0;

      &:not(:first-of-type) {
        margin-left: -4px;
      }
    `}
  />
);

const Hit = ({ label = "", divider = 4 }) => (
  <div
    css={css`
      display: inline-block;
    `}
  >
    <div
      css={css`
      display: inline-block;
      height: 32px;
      width: ${128 / divider - 1}px;
      margin-right: 1px;
      background: ${getHitColor(label)};
      display: flex;
      align-items: center;
      padding: 0 4px;
      }
    `}
    />
    <div
      css={css`
        display: inline-block;
        width: 100%;
        text-align: center;
        font-variant: small-caps;
        font-weight: 700;
        font-size: 20px;
      `}
    >
      {label}
    </div>
  </div>
);

// const getHitColor = (hitLabel) => {
//   switch (hitLabel) {
//     case HITS.BASS:
//       return "#31394888";
//     case HITS.TONE:
//       return "#31394844";
//     case HITS.SLAP:
//       return "#3139481A";
//     default:
//       return "transparent";
//   }
// };

const getHitColor = (hitLabel) => {
  switch (hitLabel) {
    case HITS.BASS:
      return "#695a81";
    case HITS.TONE:
      return "#695a8177";
    case HITS.SLAP:
      return "#695a8133";
    default:
      return "transparent";
  }
};

/** @jsxImportSource @emotion/react */

import { FC } from "react"
import { css } from "@emotion/react"
import { HITS, isDrumHit } from "../../helpers"

type Props = {
  hit: string,
  hideLabel?: boolean
  bellUnder?: boolean
}

export const Hit: FC<Props> = ({ hit, hideLabel = false, bellUnder = false }) => (
  <div
    css={css`
      position: relative;
      display: inline-block;
      width: ${400 / getDivider(hit)}%;
      &:not(:first-of-type) div:first-of-type {
        border-left: 1px solid #ccc;
      }
    `}
  >
    <div
      css={css`
        display: inline-block;
        height: ${hideLabel ? '100%' : '32px'};
        width: 100%;
        margin-right: 1px;
        background: ${getHitColor(getLabel(hit))};
        padding: 0 4px;
      `}
    />
    {!hideLabel && (
      <div
        css={css`
          display: inline-block;
          width: 100%;
          text-align: center;
          font-variant: small-caps;
          font-weight: 500;
          font-size: 20px;
        `}
      >
        {getLabel(hit)}
      </div>
    )}
    {hit.includes(HITS.BELL) && (
      <div css={css`
        position: absolute;
        top: ${bellUnder ? hideLabel ? 28 : 64 : -22}px;
        width: 100%;
        font-weight: 500;
      `}>
        <div css={css`width: 12px; height: 12px; background: #444; margin: 2px auto; border-radius: 50%;`} />
      </div>
    )}
  </div>
)

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

const getLabel = hit => {
  if (hit.length === 3) return hit[1]
  if (hit.length === 2 && isDrumHit(hit[1])) return hit[1]
  if (hit[0] === HITS.PAUSE) return undefined
  return hit[0]
}

const getDivider = (hit) => {
  if (hit[0] === HITS.TREMOLO) return 8
  if (hit[0] === HITS.TRIPLET) return 6
  return 4
}

const getHitColor = (hitLabel) => {
  switch (hitLabel) {
    case HITS.BASS:
      return "#695a81"
    case HITS.TONE:
      return "#695a8177"
    case HITS.SLAP:
      return "#695a8133"
    default:
      return "transparent"
  }
}

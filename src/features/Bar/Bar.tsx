/** @jsxImportSource @emotion/react */

import { memo, FC } from "react"
import { css } from "@emotion/react"
import { HITS, HIT_REGEX, isDrumHit } from "../../helpers"
import { Hit } from "./Hit"

type Props = {
  notes: string
  hideLabels?: boolean
  bellUnder?: boolean
}

const MemoHit = memo(Hit)

export const Bar: FC<Props> = ({ notes, hideLabels = false, bellUnder = false }) => (
  <Wrapper hasBell={notes.includes(HITS.BELL)}>
    {notes
      .split(HIT_REGEX)
      .filter(Boolean)
      .map((hit, index) => (
        <MemoHit
          key={hit + index}
          hit={hit}
          hideLabel={hideLabels}
          bellUnder={bellUnder}
        />
      )
      )}
  </Wrapper>
)

const Wrapper = ({ hasBell, ...props }) => (
  <div
    {...props}
    css={css`
      width: 100%;
      display: inline-flex;
      width: 135px;
      border-left: 4px solid #9a9aa0;
      border-right: 4px solid #9a9aa0;
      border-top: 2px solid #9a9aa0;
      margin: ${hasBell ? 24 : 8}px 0 ${hasBell ? 32 : 16}px -4px;
    `}
  />
)


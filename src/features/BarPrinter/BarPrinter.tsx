/** @jsxImportSource @emotion/react */

import { FC, useState } from "react"
import { css } from "@emotion/react"
import { convertToBars } from "../../helpers"
import { Bar } from ".."
import { Settings } from "./Settings"

type Props = {
  notes: string
}

export const BarPrinter: FC<Props> = ({ notes }) => {
  const [cols, setCols] = useState(4)
  const [base, setBase] = useState(4)

  return (
    <Wrapper {...{ cols }}>
      <Settings {...{ cols, setCols, base, setBase }} />
      {convertToBars(notes, base).map((bar, barIndex) =>
        <Bar key={bar + barIndex} notes={bar} />
      )}
    </Wrapper>
  )
}

const Wrapper = (props) => (
  <div
    {...props}
    css={css`
      width: 100%;
      margin: 48px 0 48px 4px;
      display: flex;
      flex-wrap: wrap;
      width: ${props.cols * 131}px;
      max-width: 262px;

      @media(min-width: 768px) {
        max-width: 524px;
      }

      @media(min-width: 1072px) {
        max-width: 1048px;
      }
    `}
  />
)

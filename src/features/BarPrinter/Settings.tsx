/** @jsxImportSource @emotion/react */

import { FC } from "react"
import { css } from "@emotion/react"

type Props = {
  cols: number
  setCols(cols: number): void
}

const availableCols = [2, 3, 4, 6, 8]

export const Settings: FC<Props> = ({ cols, setCols }) => (
  <Wrapper>
    <select value={cols} onChange={e => setCols(Number(e.target.value))}>
      {availableCols.map(col =>
        <option key={col} value={col}>{col} columns</option>
      )}
    </select>
  </Wrapper>
)

const Wrapper = (props) => (
  <div
    {...props}
    css={css`
      width: 100%;
      margin: 0 0 32px;
      display: none;
      justify-content: center;

      @media(min-width: 768px) {
        display: flex;
      }
  `} />
)
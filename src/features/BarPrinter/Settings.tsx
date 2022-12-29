/** @jsxImportSource @emotion/react */

import { FC } from "react"
import { css } from "@emotion/react"

type Props = {
  cols: number
  setCols(cols: number): void
  base: number
  setBase(cols: number): void
}

const availableCols = [2, 3, 4, 6, 8]
const availableBases = [3, 4]

export const Settings: FC<Props> = ({ cols, setCols, base, setBase }) => (
  <Wrapper>
    <select
      value={cols}
      onChange={(e) => setCols(Number(e.target.value))}
      css={hideOnMobile()}
    >
      {availableCols.map((_cols) => (
        <option key={_cols} value={_cols} css={setOptionVisibility(_cols)}>
          {_cols}
          {cols === _cols ? " columns" : ""}
        </option>
      ))}
    </select>

    <select value={base} onChange={(e) => setBase(Number(e.target.value))}>
      {availableBases.map((_base) => (
        <option key={_base} value={_base}>
          {_base === 3 ? "6/8" : "4/4"}
          {base === _base ? " beats" : ""}
        </option>
      ))}
    </select>
  </Wrapper>
)

const Wrapper = (props) => (
  <div
    {...props}
    css={css`
      width: 100%;
      margin: 0 0 32px;
      justify-content: center;
      display: flex;

      > *:not(:last-of-type) {
        margin-right: 12px;
      }
    `}
  />
)

const setOptionVisibility = (col: number) =>
  col < 6
    ? undefined
    : css`
        @media (max-width: 1071px) {
          display: none;
        }
      `

const hideOnMobile = () => css`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`

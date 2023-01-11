/** @jsxImportSource @emotion/react */

import { FC } from "react"
import { css } from "@emotion/react"

type Props = {
  cols: number
  setCols(cols: number): void
  base: number
  setBase(cols: number): void
  hideLabels: boolean
  setHideLabels(hide: boolean): void
  bellUnder: boolean
  setBellUnder(under: boolean): void
}

const availableCols = [2, 3, 4, 6, 8]
const availableBases = [3, 4]

export const Settings: FC<Props> = ({ cols, setCols, base, setBase, hideLabels, setHideLabels, bellUnder, setBellUnder }) => (
  <Wrapper>
    <div css={hideOnMobile()}>
      <select
        value={cols}
        onChange={(e) => setCols(Number(e.target.value))}
      >
        {availableCols.map((_cols) => (
          <option key={_cols} value={_cols} css={setOptionVisibility(_cols)}>
            {_cols}
            {cols === _cols ? " columns" : ""}
          </option>
        ))}
      </select>
    </div>

    <div>
      <select value={base} onChange={(e) => setBase(Number(e.target.value))}>
        {availableBases.map((_base) => (
          <option key={_base} value={_base}>
            {_base === 3 ? "6/8" : "4/4"}
            {base === _base ? " beats" : ""}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label css={css`
        display: flex;
        align-items: center;`
      }>
        <input type='checkbox' checked={hideLabels} onChange={(e) => setHideLabels(e.target.checked)} />
        <span css={css`font-size: 14px;`}>hide labels</span>
      </label>
    </div>

    <div>
      <label css={css`
        display: flex;
        align-items: center;`
      }>
        <input type='checkbox' checked={bellUnder} onChange={(e) => setBellUnder(e.target.checked)} />
        <span css={css`font-size: 14px;`}>bell under</span>
      </label>
    </div>
  </Wrapper>
)

const Wrapper = (props) => (
  <div
    {...props}
    css={css`
      width: 100%;
      margin: 0 0 16px;
      display: flex;
      flex-wrap: wrap;

      > * {
        margin-bottom: 16px;
      }

      > *:not(:last-of-type) {
        margin-right: 24px;
      }

      @media (min-width: 768px) {
        justify-content: center;
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

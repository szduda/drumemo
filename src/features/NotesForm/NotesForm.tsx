/** @jsxImportSource @emotion/react */

import { ChangeEvent } from "react"
import { css } from "@emotion/react"

export const NotesForm = ({ notes, setNotes, submitNotes }) => (
  <Wrapper>
    <Form>
      <textarea
        rows={5}
        value={notes}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setNotes(e.target.value)
        }
      />
      <button
        type="submit"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault()
          submitNotes(notes)
        }}
      >
        Parse
      </button>
    </Form>
  </Wrapper>
)

const Wrapper = props => (
  <div {...props} css={css`
    width: 100%;
    background: #8F859E;
    border-bottom: 2px solid #313948;
    display: flex;
    justify-content: center;
    padding: 64px 12px 8px;
  `} />
)

const Form = (props) => (
  <form
    {...props}
    css={css`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 524px;

      button,
      textarea {
        background: #F8F8F7;
        border: 2px solid #313948;
        margin: 0 0 32px;
        font-size: 24px;
        line-height: 1.35;
      }

      textarea {
        text-align: center;
        padding: 0.5rem 1rem;
        width: 100%;
      }

      button {
        padding: 0.25rem 0.75rem;
        cursor: pointer;

        &:hover {
          background: #eae0f8;
        }
      }
    `}
  />
)

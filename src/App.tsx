import { useNotes } from "./helpers"
import { BarPrinter, NotesForm, Theme } from "./features"
import { FC } from "react"

export const Drumemo: FC = () => {
  const [notes, setNotes, submitedNotes, submitNotes] = useNotes()

  return (
    <Theme>
      <NotesForm {...{ notes, setNotes, submitNotes }} />
      <BarPrinter notes={submitedNotes} />
    </Theme>
  )
}

export default Drumemo

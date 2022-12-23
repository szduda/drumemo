import { useNotes } from "./helpers";
import { BarPrinter, NotesForm, Theme } from "./features";

export const Drumemo = () => {
  const [notes, setNotes, submitedNotes, submitNotes] = useNotes();

  return (
    <Theme>
      <NotesForm {...{ notes, setNotes, submitNotes }} />
      <BarPrinter notes={submitedNotes} />
    </Theme>
  );
};

export default Drumemo;

import { useEffect, useState } from "react";

const DEFAULT_NOTES =
  "s..ss.tt\nsb.ss.+t+t+t\ns..ss.-t-t-t-t\nb.tt.bs.b.tt.bs.";
const NOTES_QUERY_PARAM = "q";

const setQueryParam = (notes: string) => {
  const params = new URLSearchParams();
  params.set(NOTES_QUERY_PARAM, notes);
  document.location.search = params.toString();
};

export const useNotes = () => {
  const [notes, setNotes] = useState(DEFAULT_NOTES);
  const [submitedNotes, submitNotes] = useState(DEFAULT_NOTES);

  useEffect(() => {
    const query = new URLSearchParams(document.location.search);
    const _notes = query.get(NOTES_QUERY_PARAM);
    if (_notes && _notes !== submitedNotes) {
      setNotes(_notes);
      submitNotes(_notes);
    }
  }, [document.location.search]);

  return [notes, setNotes, submitedNotes, setQueryParam] as const;
};

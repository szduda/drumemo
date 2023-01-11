import { useCallback, useEffect, useState } from "react"

const DEFAULT_NOTES =
  "s..ss.ttsb.ss.+t+t+t\ns..ss.-t-t-t-tb.tt.bs.\nbx..x.sx.sx..xbx..x..x.x."
const NOTES_QUERY_PARAM = "q"

export const useNotes = () => {
  const [notes, setNotes] = useState(DEFAULT_NOTES)
  const [submitedNotes, submitNotes] = useState(DEFAULT_NOTES)

  const setQueryParam = useCallback((_notes: string = '') => {
    if (_notes === submitedNotes) {
      return
    }

    const params = new URLSearchParams()
    params.set(NOTES_QUERY_PARAM, _notes.trim())
    window.history.pushState({}, '', `/?${params.toString()}`)

    setNotes(notes)
    submitNotes(notes)
  }, [submitedNotes])

  const setNotesFromUrl = useCallback(() => {
    const query = new URLSearchParams(window.location.search)
    const _notes = query.get(NOTES_QUERY_PARAM)

    if (_notes === submitedNotes) {
      return
    }

    setNotes(_notes ?? DEFAULT_NOTES)
    submitNotes(_notes ?? DEFAULT_NOTES)
  }, [submitedNotes])

  useEffect(() => {
    window.addEventListener('popstate', setNotesFromUrl)
    return () => window.removeEventListener('popstate', setNotesFromUrl)
  }, [])

  useEffect(() => {
    setNotesFromUrl()
  }, [window.location.search])

  return [notes, setNotes, submitedNotes, setQueryParam] as const
}

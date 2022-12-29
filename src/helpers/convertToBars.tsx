import { HITS, HIT_REGEX } from "."

export const convertToBars = (notes: string, base = 4) => {
  const bars: string[] = []
  let bar = ""
  notes.match(HIT_REGEX)?.forEach((hit) => {
    if (evalBar(bar) < base) {
      bar += hit
    } else {
      bars.push(bar)
      bar = hit
    }
  })

  return [...bars, bar]
}

const evalBar = (bar) => {
  let value = 0
  bar.match(HIT_REGEX)?.forEach((hit) => {
    if (hit.startsWith(HITS.TREMOLO)) value += 6
    else if (hit.startsWith(HITS.TRIPLET)) value += 8
    else value += 12
  })
  return value / 12
}

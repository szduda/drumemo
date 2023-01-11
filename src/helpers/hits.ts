export const HIT_REGEX = /([+-]?[a-z.]x?)/g
export const HITS = {
  PAUSE: ".",
  TREMOLO: "-",
  TRIPLET: "+",
  TONE: "t",
  SLAP: "s",
  BASS: "b",
  BELL: "x",
}

export const isMod = (hit: string) =>
  hit === HITS.TREMOLO ||
  hit === HITS.TRIPLET

export const isDrumHit = (hit: string) =>
  hit === HITS.BASS ||
  hit === HITS.TONE ||
  hit === HITS.SLAP
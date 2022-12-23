import { HIT_REGEX } from ".";

export const parseLine = (line) => {
  const bars: string[] = [];
  let bar = "";
  line.match(HIT_REGEX).forEach((hit) => {
    if (evalBar(bar) < 4) {
      bar += hit;
    } else {
      bars.push(bar);
      bar = hit;
    }
  });

  return [...bars, bar];
};

const evalBar = (bar) => {
  let value = 0;
  bar.match(HIT_REGEX)?.forEach((hit) => {
    if (hit.startsWith("-")) value += 6;
    else if (hit.startsWith("+")) value += 4;
    else value += 12;
  });
  return value / 12;
};

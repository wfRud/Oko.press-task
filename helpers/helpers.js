export function ShortTextFunction(txt, length) {
  if (txt.length > length) {
    return txt.substr(0, length) + "...";
  } else return txt;
}

export default function msToMin(ms) {
  return `${(ms / 60).toFixed(0)}:${("0" + ms % 60).slice(-2)}`;
}

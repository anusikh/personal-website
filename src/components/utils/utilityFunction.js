export function toDateTime(secs) {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  const d = t.getDate();
  const m = t.getMonth();
  const y = t.getFullYear();
  const day = t.getUTCDay();

  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  return ` ${d}/${m + 1}/${y} ${dayArray[day]}`;
}

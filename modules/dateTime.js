import { DateTime } from "./luxon.js";

const setTimeFromLuxor = () => {
  const timeDate = document.querySelector('#date');
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);;
  timeDate.innerHTML = date;
}

export default setTimeFromLuxor;


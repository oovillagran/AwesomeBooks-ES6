import { navigation } from './modules/navigation.js';
import loadAwesomeBooks from './modules/library.js';
import setTimeFromLuxor from './modules/dateTime.js';
//import { DateTime } from "./luxon.js";

navigation();
loadAwesomeBooks();
setTimeFromLuxor();

//const timeDate = document.querySelector('#date');

//const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);;
//timeDate.innerHTML = date;
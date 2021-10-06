var inputYear = document.querySelector("#year");
var btnCheck = document.querySelector("#btn-check");
var output = document.querySelector("#output");
function checkLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }

  return false;
}

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
function displayResult() {
  var year = inputYear.value;
  if (year < 0 || year === "") {
    output.textContent = "Please enter a valid input";
  } else {
    if (checkLeapYear(year)) {
      output.textContent = year + "  is a leap year 🥳";
    } else {
      output.textContent = year + " is not a leap year 🙁";
    }
  }
}

btnCheck.addEventListener("click", displayResult);

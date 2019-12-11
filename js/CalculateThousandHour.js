/* 
  Calculate how many days of coding to achieve 1000 hours
  depending on how many hours are going to be done per day 
*/

function CalculateThousandHour() {

  document.getElementById("calculate");

  // Declare variables
  var hour;
  var outputArea;
  var totalHour = 1000;
  var totalDay;
  var year = 365;

  hour = document.getElementById("hour").value;

  // Convert variables to number
  hour = Number(hour);
  year = Number(year);
  totalHour = Number(totalHour);
  totalDay = Number(totalDay);

  // Do calculations based on hour value
  if (hour <= 0) {

    outputArea = document.getElementById("output");

    outputArea.innerHTML = "You need to choose at least 1 hour per day.";

    // Make output message visible
    document.getElementById("output").style.opacity = "1";

    document.getElementById("calculateThousandHour").reset();

  } else if (hour === 1) {
    totalDay = (totalHour / hour) - (2 * year);

    outputArea = document.getElementById("output");

    outputArea.innerHTML = "It will take you " + Math.floor((totalHour / hour) / year) + " years " + totalDay + " days to reach 1000 hours if you code " + hour + " hour per day!";

    // Make output message visible
    document.getElementById("output").style.opacity = "1";

    // Set hour input to no value
    document.getElementById("calculateThousandHour").reset();
  } else if (hour === 2) {
    totalDay = (totalHour / hour) - year;

    outputArea = document.getElementById("output");
    outputArea.innerHTML = "It will take you " + ((totalHour / hour) / year).toPrecision(1) + " year " + totalDay + " days to reach 1000 hours if you code " + hour + " hours per day!";

    // Make output message visible
    document.getElementById("output").style.opacity = "1";

    document.getElementById("calculateThousandHour").reset();
  } else {
    totalDay = totalHour / hour;

    outputArea = document.getElementById("output");
    outputArea.innerHTML = "It will take you " + Math.floor(totalDay) + " days to reach 1000 hours if you code " + hour + " hours per day!";

    // Make output message visible
    document.getElementById("output").style.opacity = "1";

    document.getElementById("calculateThousandHour").reset();
  }
}


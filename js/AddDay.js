
var textareaArray = [];
function AddDay() {

  document.getElementById("day");

  // Create array object to hold questions
  let textareas = [{
    "questionOne": `${document.querySelector(".questionOne").value}`,
    "questionTwo": `${document.querySelector(".questionTwo").value}`,
    "questionThree": `${document.querySelector(".questionThree").value}`,
  }];

  // Append array object to textareaArray
  textareaArray.push(textareas);

  // Place to populate the questions
  var content = document.querySelector(".content");

  // Loop through textareas array
  // And set size limit for textareaArray array
  for (var index = 0; index < textareas.length && textareaArray.length <= 66; index++) {
    // Check if user filled out all required fields
    if (document.querySelector(".questionOne").value == "" || document.querySelector(".questionTwo").value == "" || document.querySelector(".questionThree").value == "") {

      // Make error message visible
      document.querySelector(".error").style.opacity = "1";

      // Display error message
      document.querySelector(".error").value = "Please, fill out all required fields!";

      // Remove the empty element of the array
      textareaArray.pop(textareas);

      return false;

    } else {

      // Make error message to be hidden
      document.querySelector(".error").style.opacity = "0";

      // Change the value of the day button
      // To day 1, day 2 and so on
      document.getElementById("day").value = "Add Day " + (textareaArray.length + 1);

      // Display the dynamic content created by user
      content.innerHTML += "<article>" + "<h3>" + "Day " + (textareaArray.length) + "</h3>" + "<p>" + textareas[index]["questionOne"] + "</p>" + "<p>" + textareas[index]["questionTwo"] + "</p>" + "<p>" + textareas[index]["questionThree"] + "</p>" + "</article>";

      // Set textareas to no text
      document.getElementById("mainForm").reset();

      // Change the value of the day button
      // So user will know the challenge is done
      if (textareaArray.length == 66) {
        document.getElementById("day").value = "Congrats!";

      }
    }
  }
}







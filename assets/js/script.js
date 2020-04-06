function onSubmit() {
  // Store value from the input given by the user
  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;
  var getGender = document.getElementsByName('gender');
  for (var i = 0; i < getGender.length; i++) {
    if (getGender[i].checked) {
      var gender = getGender[i].value;
    }
  }
  var address = document.getElementById('address').value;
  var terms = document.getElementById('terms');

  // Consoling input given by the user
  console.log(firstName, lastName, gender, address, terms.value);

  // Getting Helper Text for Errors
  var fNameHelper = document.getElementsByClassName('helper')[0];
  var lNameHelper = document.getElementsByClassName('helper')[1];
  var genderHelper = document.getElementsByClassName('helper')[2];
  var addressHelper = document.getElementsByClassName('helper')[3];
  var termsHelper = document.getElementsByClassName('helper')[4];

  // For Firstname
  if (!firstName) {
    fNameHelper.style.opacity = "1";
    fNameHelper.style.transition = ".2s";
  } else {
    fNameHelper.style.opacity = "0";
    fNameHelper.style.transition = ".2s";
  }

  // For Lastname
  if (!lastName) {
    lNameHelper.style.opacity = "1";
    fNameHelper.style.transition = ".2s";
  } else {
    lNameHelper.style.opacity = "0";
    fNameHelper.style.transition = ".2s";
  }

  // For Gender
  if (gender == undefined) {
    genderHelper.style.opacity = "1";
    fNameHelper.style.transition = ".2s";
  } else {
    genderHelper.style.opacity = "0";
    fNameHelper.style.transition = ".2s";
  }

  // For Address
  if (!address) {
    addressHelper.style.opacity = "1";
    fNameHelper.style.transition = ".2s";
  } else {
    addressHelper.style.opacity = "0";
    fNameHelper.style.transition = ".2s";
  }

  // For Terms
  if (terms.checked == false) {
    termsHelper.style.opacity = "1";
    fNameHelper.style.transition = ".2s";
  } else {
    termsHelper.style.opacity = "0";
    fNameHelper.style.transition = ".2s";
  }

  // Validate if all the data is filled
  if (!firstName || !lastName || gender == undefined || !address || terms.checked == false) {
    alert("Please fill all the Details!");
  } else { // Run this if all the data is filled
    alert("Thank You!");

    document.getElementById('data').innerHTML +=
      "<tr>" +
      "<td>" + firstName + "</td>" +
      "<td>" + lastName + "</td>" +
      "<td>" + gender + "</td>" +
      "<td>" + address + "</td>" +
      "<td>" + "<button type='button' id='editData' value='Edit'>Edit</button>" + "</td>" +
      "<td>" + "<button type='button' id='deleteData' value='Delete'>Delete</button>" + "</td>" +
      "</tr>";

      // Reset the current form data
      document.getElementById('first-name').value = "";
      document.getElementById('last-name').value = "";
      document.getElementById('male').checked = false;
      document.getElementById('female').checked = false;
      document.getElementById('address').value = "";
      document.getElementById('terms').checked = false;
  }
}
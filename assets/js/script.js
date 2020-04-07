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

  // Getting Helper Text for Errors
  var fNameHelper = document.getElementsByClassName('helper')[0];
  var lNameHelper = document.getElementsByClassName('helper')[1];
  var genderHelper = document.getElementsByClassName('helper')[2];
  var addressHelper = document.getElementsByClassName('helper')[3];
  var termsHelper = document.getElementsByClassName('helper')[4];

  // For Firstname
  if (!firstName) {
    fNameHelper.style.display = "inline";
  } else {
    fNameHelper.style.display = "none";
  }

  // For Lastname
  if (!lastName) {
    lNameHelper.style.display = "inline";
  } else {
    lNameHelper.style.display = "none";
  }

  // For Gender
  if (gender == undefined) {
    genderHelper.style.display = "inline";
  } else {
    genderHelper.style.display = "none";
  }

  // For Address
  if (!address) {
    addressHelper.style.display = "inline";
  } else {
    addressHelper.style.display = "none";
  }

  // For Terms
  if (terms.checked == false) {
    termsHelper.style.display = "inline";
  } else {
    termsHelper.style.display = "none";
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
      "<td>" + "<button type='button' id='editData' value='Edit' onclick='onEdit(this)'>Edit</button>" + "</td>" +
      "<td>" + "<button type='button' id='deleteData' value='Delete' onclick='onDelete()'>Delete</button>" + "</td>" +
      "</tr>";

    // Reset the current form data
    document.querySelector('form').reset();
  }
}

function onEdit(tableData) {
  // Get data into input boxes
  var selectedRow = tableData.parentElement.parentElement;
  document.getElementById("first-name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("last-name").value = selectedRow.cells[1].innerHTML;
  if (selectedRow.cells[2].innerHTML == "Male") {
    document.getElementById("male").checked = true;
  } else {
    document.getElementById("female").checked = true;
  }
  document.getElementById("address").value = selectedRow.cells[3].innerHTML;
  document.getElementById("terms").checked = true;

  // Remove that particular row
  var tableBody = document.querySelector('tbody');
  var tableRow = document.querySelectorAll("tbody tr");
  for (var i = 0; i < tableRow.length; i++) {
    tableRow[i].onclick = function () {
      tableBody.removeChild(this);
    }
  }
}

function onDelete() {
  var tableBody = document.querySelector('tbody');
  var tableRow = document.querySelectorAll("tbody tr");
  for (var i = 0; i < tableRow.length; i++) {
    tableRow[i].onclick = function () {
      tableBody.removeChild(this);
    }
  }
  alert("This data has been deleted!")
} 

function submitForm() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.getElementById("gender").value;
  var food = document.getElementById("food").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var cell8 = newRow.insertCell(7);
  var cell9 = newRow.insertCell(8);

  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = email;
  cell4.innerHTML = address;
  cell5.innerHTML = pincode;
  cell6.innerHTML = gender;
  cell7.innerHTML = food;
  cell8.innerHTML = state;
  cell9.innerHTML = country;

  document.getElementById("myForm").reset();
}

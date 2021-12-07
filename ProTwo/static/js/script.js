function validateForm() {
  var x = document.forms["myForm"]["zipcode"].value;
  if (x < 1 && x>99999) {
    alert("Please enter valid Zipcode please");
    return false;
  }
} 
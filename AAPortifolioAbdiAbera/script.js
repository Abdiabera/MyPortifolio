document.getElementById("customerForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent form from submitting and refreshing the page

  // Capture form values
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const phoneNumber = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  // Display the captured information on the screen
  document.getElementById("displayFname").textContent = `First Name: ${firstName}`;
  document.getElementById("displayLname").textContent = `Last Name: ${lastName}`;
  document.getElementById("displayPhone").textContent = `Phone Number: ${phoneNumber}`;
  document.getElementById("displayAddress").textContent = `Address: ${address}`;
});

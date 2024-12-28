function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert("Thank you for your message! We will get back to you soon.");
  event.target.reset();
}

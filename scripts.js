function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert("Thank you for your message! We will get back to you soon.");
  event.target.reset();
}
// Simulated Public and Private Keys
const publicKey = "-----BEGIN PUBLIC KEY-----\nYOUR_PUBLIC_KEY_HERE\n-----END PUBLIC KEY-----";
const privateKey = "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----";

// Encrypt Message Function
function encryptMessageWithPublicKey(message) {
  return btoa(message); // Base64 encoding simulates encryption
}

// Decrypt Message Function
function decryptMessageWithPrivateKey(encryptedMessage) {
  return atob(encryptedMessage); // Base64 decoding simulates decryption
}

// Event Listeners
document.getElementById("encrypt-btn").addEventListener("click", function () {
  const message = document.getElementById("message").value;

  if (message.trim() === "") {
    alert("Please enter a message.");
    return;
  }

  const encryptedMessage = encryptMessageWithPublicKey(message);
  document.getElementById("encrypted-message").textContent = encryptedMessage;

  // Enable Decrypt Button
  document.getElementById("decrypt-btn").disabled = false;
});

document.getElementById("decrypt-btn").addEventListener("click", function () {
  const encryptedMessage = document.getElementById("encrypted-message").textContent;

  if (encryptedMessage.trim() === "") {
    alert("No encrypted message found.");
    return;
  }

  const decryptedMessage = decryptMessageWithPrivateKey(encryptedMessage);
  document.getElementById("decrypted-message").textContent = decryptedMessage;
});

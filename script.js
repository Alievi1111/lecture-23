let usernameDisplay = document.querySelector("#usernameDisplay");
let usernameInput = document.querySelector("#usernameInput");
let messageInput = document.querySelector("#messageInput");

window.onload = function () {
  const savedMessage = sessionStorage.getItem("messageDraft");
  const savedName = localStorage.getItem("username");

  if (savedMessage) {
    messageInput.value = savedMessage;
  }

  if (savedName) {
    usernameInput.value = savedName;
    usernameDisplay.textContent = savedName;
  }
};

usernameInput.addEventListener("input", function () {
  localStorage.setItem("username", usernameInput.value);
  usernameDisplay.textContent = usernameInput.value;
});

messageInput.addEventListener("input", function () {
  sessionStorage.setItem("messageDraft", messageInput.value);
});

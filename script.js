const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});


// Function to show the popup
function showPopup() {
  var popup = document.getElementById("popupBox");
  popup.style.display = "block";
}

// Add event listener to the button
document.getElementById("popupButton").addEventListener("click", showPopup);

const video = document.getElementById('video');
const verifyButton = document.getElementById('verify-button');
const alertBox = document.getElementById('alert');
const backButton = document.getElementById('back-button');

// Disable the "Go Back" button initially
backButton.disabled = true;

// Check if getUserMedia is supported
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Request access to the webcam
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      // Display the webcam stream in the video element
      video.srcObject = stream;
    })
    .catch(function(error) {
      console.error('Error accessing webcam:', error);
    });
}

// Event listener for the verify button
verifyButton.addEventListener('click', function() {
  alertBox.classList.add('show');
  verifyButton.disabled = true;
  backButton.disabled = false;
  
  // Wait for a short duration (e.g., 3 seconds) and enable the "Go Back" button
  setTimeout(function() {
    backButton.disabled = false;
  }, 3000);
});

// Event listener for the back button
backButton.addEventListener('click', function() {
  window.location.href = 'wish.html';
});

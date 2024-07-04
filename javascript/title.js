const originalTitle = "~/OSF";
let loadingInterval;

// Function to start the loading animation
function startLoadingAnimation() {
  let dots = '';
  loadingInterval = setInterval(() => {
    dots += '.';
    document.title = `${originalTitle} ${dots}`;
    if (dots.length > 5) dots = ''; // Reset dots after four dots
  }, 500); // Adjust the interval (in milliseconds) between each dot
}

// Start the loading animation after a delay
setTimeout(startLoadingAnimation, 1000); // Adjust the delay (in milliseconds) before starting the loading animation

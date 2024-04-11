//need to change this to fetch the logout API and have event listener on logout button
// Get the logout button element
const logoutButton = document.querySelector('#logout-button');

// Add an event listener to the logout button
logoutButton.addEventListener('click', async function() {
  // Make an HTTP request to the logout API
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Check the response status
  if (response.status === 204) {
    // The user has been logged out successfully
    // Redirect the user to the home page
    window.location.href = '/';
  } else {
    // An error occurred while logging out
    // Display an error message to the user
    alert('An error occurred while logging out. Please try again later.');
    console.log(Error);
  }
});


// document
// //query logout button from main layout view/header
//   .querySelector('#logout-button')
//   .addEventListener('submit', loginFormHandler);



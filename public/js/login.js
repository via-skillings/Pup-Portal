const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can submit it with JavaScript
    event.preventDefault();
  
    // Get email and password from the form elements on the page
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  console.log('Úser Input: ', email, password)
    //checks if both email an password received
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Response: ', response)
  //if login succeeds, replace document location in DOM with home page at route "/"
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
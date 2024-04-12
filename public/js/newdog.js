//need form handling JS here for the new dog form/input
//sending data to backend: get html- document.getelementById, get data from form, save data from form-inputname.value, store data in variables, fetch api and post data as json-strignify

const newDogFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can submit it with JavaScript
    event.preventDefault();
  
    // Get text values entered by user for new Dog instance from the form elements on the newdog handlebars view
    const name = document.querySelector('#new-name').value.trim();
    const age = document.querySelector('#new-age').value.trim();
    const breed = document.querySelector('#new-breed').value.trim();
    const size = document.querySelector('#new-size').value.trim();
    const weight = document.querySelector('#new-weight').value.trim();
    const sex = document.querySelector('#new-sex').value.trim();
    const vaccinated = document.querySelector('#new-vaccinated').value.trim();
    const spayed = document.querySelector('#new-spayedneutered').value.trim();
    const fee = document.querySelector('#new-fee').value.trim();

  
    //checks if text values fron all form fields is received
    if ( name && age && breed && size && weight && sex && vaccinated && spayed && fee) {
      // Send the values from the form to the server
      const response = await fetch('/api/dogs/newdog', {
        method: 'POST',
        body: JSON.stringify({name, age, breed, size, weight, sex, vaccinated, spayed, fee}),
        //tell the server that the body content is being sent as JSON
        headers: { 'Content-Type': 'application/json' },
      });
  //if post request for new dog succeeds, replace document location in DOM with home page at route "/"
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add new dog');
      }
    }
  };
  
  document
    .querySelector('.new-dog-form')
    .addEventListener('submit', newDogFormHandler);
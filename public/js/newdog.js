//need form handling JS here for the new dog form/input
//sending data to backend: get html- document.getelementById, get data from form, save data from form-inputname.value, store data in variables, fetch api and post data as json-strignify

const newDogFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can submit it with JavaScript
    event.preventDefault();
  
    // Get text values entered by user for new Dog instance from the form elements on the newdog handlebars view
    const newName = document.querySelector('#new-name').value.trim();
    const newAge = document.querySelector('#new-age').value.trim();
    const newBreed = document.querySelector('#new-breed').value.trim();
    const newSize = document.querySelector('#new-size').value.trim();
    const newWeight = document.querySelector('#new-weight').value.trim();
    const newSex = document.querySelector('#new-sex').value.trim();
    const newVaccinated = document.querySelector('#new-vaccinated').value.trim();
    const newSpayedNeutered = document.querySelector('#new-spayedneutered').value.trim();
    const newFee = document.querySelector('#new-fee').value.trim();

  
    //checks if text values fron all form fields is received
    if ( newName && newAge && newBreed && newSize && newWeight && newSex && newVaccinated && newSpayedNeutered && newFee) {
      // Send the values from the form to the server
      const response = await fetch('/api/dogs/newdog', {
        method: 'POST',
        body: JSON.stringify({newName, newAge, newBreed, newSize, newWeight, newSex, newVaccinated, newSpayedNeutered, newFee }),
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
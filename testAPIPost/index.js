// When the WALL-E button is clicked
$('#post-wall-e').on('click', (event) => {
  // Create an object with data to submit
  const characterInfo = {
    name:       'WALL-E',
    occupation: 'Waste Allocation Robot',
    weapon:     'Head laser'
  };



  // Make a POST request
  $.ajax({
      // Notice that we are using POST
    method:  'POST',
    url:     'https://ih-api.herokuapp.com/characters',
      // The data key is for sending data in a POST, PUT or PATCH!
    data:    characterInfo,
    success: showFeedback,
    error:   handleError
  });
});

  $('#character-form').on('submit', (event) => {
    event.preventDefault();
    console.log('form submit');
});

function showFeedback (postResponse) {
  console.log('post success');
  console.log(postResponse);
    const newCharacterHtml = `
    <li>
      <h3> ${postResponse.name} </h3>
      <p> Id: ${postResponse.id} </p>
    </li>
  `;

  $('#characters-list').append(newCharacterHtml);
}


function handleError (err) {
  console.log('Oh no! Error:');
  console.log(err);
}
console.log("You're awesome!")
const authorization = "Bearer sk_11a996a530ab669bcc09d9285552e006";

const displayUserInfo = (data) => {
  // query selector
  const userName = document.querySelector('#userName');
  const userEmail = document.querySelector('#userEmail');
  const userBio = document.querySelector('#userBio');
  const userLocation = document.querySelector('#userLocation');
  const userAvatar = document.querySelector('#userAvatar');

  userName.innerText = data.person.name.fullName;
  userEmail.innerText = data.person.email;
  userBio.innerText = data.person.bio;
  userLocation.innerText = data.person.location;
  userAvatar.innerHTML = `<img src="${data.person.avatar}" >`;
}



const callClearbitApi = (email) => {
  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`;
  const options = {
    headers: {
      'Authorization': authorization
    }
  };

  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      displayUserInfo(data);
    });
}

// 1. Console log
// 2. Select the form
const form = document.querySelector('#clearbitForm');
// 3. Add listener to the form
form.addEventListener('submit', (event) => {
  // callClearbitApi("email parameter");
  // 4. Select the information from the input
  const emailInput = document.querySelector('#clearbitEmail');
  console.log(emailInput.value);
  // 5. Send an AJAX request to the Clearbit API, using the information
  callClearbitApi(emailInput.value);


});

// Name -> data.person.name.fullName


// HTTP STATUS

// 2xx EVERYTHING IS OKAY

// 3xx EVERYTHING IS OKAY, but you got redirect

// 4xx You fucked up
// 401 Unauthorized


// 5xx We fucked up

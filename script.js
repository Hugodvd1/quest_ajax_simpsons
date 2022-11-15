const btnChange = document.getElementById('change');


// This function loads simpson data from the Pokemon API
function fetchSimpsonJSON() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(simpson) {
        console.log('data decoded from JSON:', simpson[0]);
  
        // Build a block of HTML
        const simpsonHtml = `
          <p><strong>${simpson[0].character}</strong></p>
          <img src="${simpson[0].image}" />
          <p>${simpson[0].quote}</p>
        `;
        document.querySelector('#simpson-quote').innerHTML = simpsonHtml;
      });
  }

  fetchSimpsonJSON();

  btnChange.addEventListener('click', function () {
    fetchSimpsonJSON();
  });
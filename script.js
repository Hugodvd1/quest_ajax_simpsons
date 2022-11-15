const btnChange = document.getElementById('change');


function fetchSimpsonJSON() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
        .then(function (response) {
            return response.data; 
        })
        .then(function (simpson) {
            console.log('data decoded from JSON:', simpson[0]);

            const simpsonHtml = `
          <p><strong>${simpson[0].character}</strong></p>
          <img src="${simpson[0].image}" />
          <p>${simpson[0].quote}</p>
        `;
            document.querySelector('#simpson-quest').innerHTML = simpsonHtml;
        });
}

fetchSimpsonJSON();

btnChange.addEventListener('click', function () {
    fetchSimpsonJSON();
});
// This function loads pokemon data from the Pokemon API
function fetchSimpsonJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
        .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
        })
        .then(function(simpsonquotes) {
        console.log('data decoded from JSON:', simpsonquotes);
            
        // Build a block of HTML
        const simpsonHtml = `
            <p><strong>${simpsonquotes[0].character}</strong></p>
            <img src="${simpsonquotes[0].image}" />
            <p>a prononcé la fameuse citation :</p>
            <p><i>${simpsonquotes[0].quote}</i></p>
        `;
        document.querySelector('#simpsondiv').innerHTML = simpsonHtml;
        });
    }
    
    fetchSimpsonJSON();

document.getElementById("another").addEventListener("click", function() {
    fetchSimpsonJSON();
}, true);
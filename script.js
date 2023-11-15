fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        // Extract the joke text from the JSON response
        const jokeText = jokeData.attachments[0].text;

        // Get the HTML element with the ID 'jokeElement'
        const jokeElement = document.getElementById('jokeElement');

        // Set the inner HTML of 'jokeElement' to the retrieved joke text
        jokeElement.innerHTML = jokeText;
    })
    .catch(error => {
        // Handle errors if the fetch request fails
        console.error('Error fetching joke:', error);
    });

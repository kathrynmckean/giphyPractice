async function getGif() {
    // let userInput = document.getElementById("input").value
    let userInput = document.getElementById("input").value
    console.log(userInput)

    let giphyApiKey = process.env.API_KEY
    let giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg-13&api_key=${giphyApiKey}`

    const response = await fetch(giphyApiURL)
    console.log(response)

    const data = await response.json();
    console.log(data)

    let num = Math.floor((Math.random() * 25))
    //random number between 0 and 24  
    let imgPath = data.data[num].images.fixed_height.url
    console.log(imgPath)
    document.getElementById("gif").src = imgPath; // updates the gif to the most current search
}

// giphy gives you 25 results automatically so instead of picking the first one every time...
// I want to pick a random number between 0 and 24 and use that as my index
// That should give me more variety if someone enters the same word multiple times hoping for a different result

// Just found out that var is old and out-of-date which is the opposite of what I thought
// also found out that I should be using async/await
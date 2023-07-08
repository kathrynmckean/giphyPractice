function willI() {
    let note = document.getElementById('willI');
    console.log(note.textContent);

    let promptChange = document.getElementById('prompt');
    promptChange.textContent = note.textContent;
    console.log("success")
}
function willThey() {
    let note = document.getElementById('willThey');
    console.log(note.textContent);

    let promptChange = document.getElementById('prompt');
    promptChange.textContent = note.textContent;
    console.log("success")
}

function handlePrompt(choice) {
    showSearchBar();
    if (choice === "should I") {
        let note = document.getElementById('shouldI');
        console.log(note.textContent);

        let promptChange = document.getElementById('prompt');
        promptChange.textContent = note.textContent;
        console.log("success")
    } else if (choice === "will I") {
        console.log("will i")
    } else if (choice === "will they") {
        console.log("will they");
    } else {
        // gracefully exit function
        return;
    }
}




// let pTwo = document.getElementById("willThey")

// pTwo.addEventListener("click", willThey)



async function getGif() {

    let userInput = document.getElementById("input").value

    // console.log(userInput)



    let giphyApiKey = 'wL2VhWAS3RK5vRLV4Xur1HwpaF9O3dpp'

    let giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg-13&api_key=${giphyApiKey}`



    const response = await fetch(giphyApiURL)

    // console.log(response)



    const data = await response.json();

    // console.log(data)



    let num = Math.floor((Math.random() * 25))

    //random number between 0 and 24

    let imgPath = data.data[num].images.fixed_height.url

    // console.log(imgPath)

    document.getElementById("gif").src = imgPath; // updates the gif to the most current search

}



let showSearchBar = (string, el) => {





    const newInput = document.createElement("input")

    newInput.setAttribute("type", "text");

    newInput.setAttribute("id", "input");



    const newButton = document.createElement("button")

    newButton.setAttribute("onClick", "getGif()");

    newButton.textContent = `search`



    let search = document.createElement("div")

    search.appendChild(newInput)

    search.appendChild(newButton)



    const questionFrame = document.getElementById("questionFrame")

    questionFrame.replaceChild(search, questionFrame.lastElementChild);







    // when you click a prompt it should get bigger and show an imput and search button.

}
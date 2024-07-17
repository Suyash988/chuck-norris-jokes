const loadJoke = async () => {

    try {
        const chuckNorrisIsFetch = await fetch('https://api.chucknorris.io/jokes/random', {
            headers: {
                Accept: "application/json"
            }
        })
        const jokeData = await chuckNorrisIsFetch.json();
        const joke = jokeData.value;
        
        const formattedJoke = `<p style = "font-size: 30px;line-height: 28px; color: #333; text-align: center;">${joke}</p>`;
       
        document.getElementById('loadingJoke').innerHTML  = formattedJoke;
    } catch (error) {
       console.log(error) 
    }
}

document.getElementById('loadingBtn').addEventListener("click", loadJoke)


const loadJoke = async () => {

    try {
        const chuckNorrisIsFetch = await fetch('https://api.chucknorris.io/jokes/random', {
            headers: {
                Accept: "application/json"
            }
        })
        const jokeData = await chuckNorrisIsFetch.json();
        document.getElementById('loadingJoke').innerHTML  = jokeData.value;
    } catch (error) {
       console.log(error) 
    }
}

document.getElementById('loadingBtn').addEventListener("click", loadJoke)


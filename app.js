const loadJoke = async () => {
    
    const loader = document.getElementById('loader');
    const jokeLoading = document.getElementById('loadingJoke');

    loader.style.display = 'block';
    jokeLoading.style.display = 'none';

    try {
        const chuckNorrisIsFetch = await fetch('https://api.chucknorris.io/jokes/random', {
            headers: {
                Accept: "application/json"
            }
        })
        const jokeData = await chuckNorrisIsFetch.json();
        const joke = jokeData.value;
        
        const formattedJoke = `<p style = "font-size: 30px;line-height: 28px; color: #333; text-align: center;">${joke}</p>`;
      
        loader.style.display = 'none';
        jokeLoading.style.display = 'block';
        document.getElementById('loadingJoke').innerHTML  = formattedJoke;

        
    } catch (error) {
       console.log(error) 
    }
}

document.getElementById('loadingBtn').addEventListener("click", loadJoke)


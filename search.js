let getSearch = (event) => {
    document.querySelector("#main-container").innerHTML = ""
    let query = event.currentTarget.value 

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+query, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "c0dbb0022bmshdac5721511fc351p152251jsndd5434dfa369"
        }
    })
    .then(response =>
        response.json()
    )
    .then((body) => {
        console.log(body)

        let newDivContainer = document.createElement("div")
            newDivContainer.className = "w-100 recently-played-container"
            document.querySelector("#main-container").appendChild(newDivContainer)
        
    
        for (let i = 0; i < 6; i++) {
               let obj = body.data[i];
        let newResultCard = document.createElement("div")
            newResultCard.className = "spotify-card d-flex flex-column"
            newResultCard.innerHTML = `<div class="p-2">
            <div>
              <img src="${obj.album.cover_medium}" alt="">
            </div>
            <div class="mt-2">
              <h6 class="text_clamp_1">${obj.title}</h6>
              <p class="text_clamp_2">Merge 2004</p>
            </div>
          </div>`

          newResultCard.onclick = () => {
            window.location.assign("./album_page.html?id=" + obj.album.id)
         }

          document.querySelector(".recently-played-container").appendChild(newResultCard)

                }
    
    })
    
    .catch(err => {
        console.error(err);
    });
    











    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+query, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "c0dbb0022bmshdac5721511fc351p152251jsndd5434dfa369"
        }
    })
    .then(response =>
        response.json()
    )
    .then((body) => {
        console.log(body)

        let newDivContainer = document.createElement("div")
            newDivContainer.className = "w-100 recently-played-container"
            document.querySelector("#main-container").appendChild(newDivContainer)
        
    
        for (let i = 0; i < 11; i++) {
               let obj = body.data[i];
        let newResultCard = document.createElement("div")
            newResultCard.className = "spotify-card d-flex flex-column"
            newResultCard.innerHTML = `<div class="p-2">
            <div>
              <img src="${obj.album.cover_medium}" alt="">
            </div>
            <div class="mt-2">
              <h6 class="text_clamp_1">${obj.title}</h6>
              <p class="text_clamp_2">Merge 2004</p>
            </div>
          </div>`

          document.querySelector(".recently-played-container").appendChild(newResultCard)

                }
    
    })
    
    .catch(err => {
        console.error(err);
    });
    }











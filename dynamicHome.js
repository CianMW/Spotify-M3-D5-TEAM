window.onload = () => {
    document.querySelector("#main-container").innerHTML = ""
}


function loadMusic(query){


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

    let goodMorningNode = document.createElement("div")
        goodMorningNode.className = "col-12 mt-3"
        goodMorningNode.innerHTML = `
                <div>
                <h3>Good Morning</h3>
                </div>
                <div class="d-inline-flex good_morning_container">
                </div>`

        document.querySelector("#main-container").appendChild(goodMorningNode)


        for (let i = 0; i < 9; i++) {
            let obj = body.data[i];
                
            let newMorningSectionNode = document.createElement("div")
                newMorningSectionNode.className = "d-flex align-items-center good_morning_section"
                newMorningSectionNode.id= `${obj.album.id}`
                newMorningSectionNode.innerHTML = `<img  src="${obj.album.cover_small}" width="70" height="70" alt="">
                <p class="text_clamp_1 my-0">${obj.album.title}</p>`
                
                document.querySelector(".d-inline-flex.good_morning_container").appendChild(newMorningSectionNode)
            }
            
        
        
            
        `
             <div class="col-12 mt-3">
            <div>
              <h3>Good Morning</h3>
            </div>
            <div class="d-inline-flex good_morning_container">
                <div class="d-flex align-items-center good_morning_section">
                  <img src="https://cdn.crello.com/downloads/cdec5ddb-316f-478a-a700-dac9de3c0382_450.jpeg" width="70" height="70" alt="">
                  <p class="text_clamp_1 my-0">Burning Jazz-Rap Fusion</p>
                </div>
                <div class="d-flex align-items-center good_morning_section">
                  <img src="https://static.billboard.com/files/media/Young-Thug-Jeffery-2016-billboard-1240-compressed.jpg" width="70" height="70" alt="">
                  <p class="text_clamp_1 my-0">Young Thug Jeffery</p>
                </div>
                <div class="d-flex align-items-center good_morning_section">
                  <img src="https://static.billboard.com/files/media/Lady-Gaga-Fame-Monster-album-covers-billboard-1000x1000-compressed.jpg" width="70" height="70" alt="">
                  <p class="text_clamp_1 my-0">Lady Lady Gaga Fame Monster</p>
                </div>
                <div class="d-flex align-items-center good_morning_section">
                  <img src="https://static.billboard.com/files/media/Janet-Jackson-Rhythm-Nation-1814-album-covers-billboard-1000x1000-compressed.jpg" width="70" height="70" alt="">
                  <p class="text_clamp_1 my-0">Janet Jackson Rhythm Nation</p>
                </div>
                <div class="d-flex align-items-center good_morning_section">
                  <img src="https://static.billboard.com/files/media/Funkadelic-Maggot-Brain-album-covers-billboard-1000x1000-compressed.jpg" width="70" height="70" alt="">
                  <p class="text_clamp_1 my-0">Funkadelic Maggot Brain</p>
                </div>
                <div class="d-flex align-items-center good_morning_section">
                  <img src="https://static.billboard.com/files/media/cardi-b-invasion-of-privacy-album-art-2018-billboard-embed-compressed.jpg" width="70" height="70" alt="">
                  <p class="text_clamp_1 my-0">Cardi B Invasion of Privacy</p>
                </div>
                <div class="d-flex align-items-center good_morning_section">
                  <img src="https://static.billboard.com/files/media/Whitney-Houston-Whitney-Houston-album-covers-billboard-1000x1000-compressed.jpg" width="70" height="70" alt="">
                  <p class="text_clamp_1 my-0">Whitney Houston</p>
                </div>
                <div class="d-flex align-items-center good_morning_section">
                  <img src="https://static.billboard.com/files/media/Fleetwood-Mac-Rumours-album-covers-billboard-1000x1000-compressed.jpg" width="70" height="70" alt="">
                  <p class="text_clamp_1 my-0">Fleetwood Mac Rumours</p>
                </div>
            </div>
            </div>`
        











})

.catch(err => {
	console.error(err);
});






}

loadMusic("eminem")
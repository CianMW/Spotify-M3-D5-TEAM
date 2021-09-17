window.onload = () => {
    document.querySelector("#main-container").innerHTML = ""
}



//START of the Load Morning Section

function loadMorningSection(query){


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

})

.catch(err => {
	console.error(err);
});

}



//  End of the Load morning section function


//start of the load recently played function
function loadRecentlyPlayed(query){


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

    let recentlyPlayedSection = document.createElement("div")
        recentlyPlayedSection.className = "col-12 "
        recentlyPlayedSection.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mt-3">
                <h3>Recently played</h3>
                <h6>SEE ALL</h6>
            </div>
            <div class="w-100 recently-played-container">
                </div>`

        document.querySelector("#main-container").appendChild(recentlyPlayedSection)


        for (let i = 0; i < 11; i++) {
            let obj = body.data[i];
                
            let newRecentlyPlayedNode = document.createElement("div")
                newRecentlyPlayedNode.className = "spotify-card d-flex flex-column"
                newRecentlyPlayedNode.id= `${obj.album.id}`
                newRecentlyPlayedNode.innerHTML = `    
                <div class="p-2">
                <div>
                  <img src="${obj.album.cover_medium}" alt="">
                </div>
                <div class="mt-2">
                  <h6 class="text_clamp_1">${obj.album.title}</h6>
                  <p class="text_clamp_2">${obj.artist.name}</p>
                </div>
              </div>`
                
                document.querySelector(".recently-played-container").appendChild(newRecentlyPlayedNode)
            }

})

.catch(err => {
	console.error(err);
});

}
//  END of the load recently played function




//START of SHOWS TO TRY section
function loadShowsToTry(query){


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

    let recentlyPlayedSection = document.createElement("div")
        recentlyPlayedSection.className = "col-12 "
        recentlyPlayedSection.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mt-3">
        <div>
          <h3 class="my-0">Shows to try</h3>
          <p class="my-0">Podcasts we think you'll get hooked on.</p>
        </div>
        <h6>SEE ALL</h6>
      </div>
      <div class="w-100 mt-3 shows-to-try-container"></div>`

        document.querySelector("#main-container").appendChild(recentlyPlayedSection)


        for (let i = 0; i < 11; i++) {
            let obj = body.data[i];
                
            let showsToTryNode = document.createElement("div")
                showsToTryNode.className = "spotify-card d-flex flex-column"
                showsToTryNode.id= `${obj.album.id}`
                showsToTryNode.innerHTML = `    
                <div class="p-2">
                <div>
                  <img src="${obj.album.cover_medium}" alt="" class="podcast-img">
                </div>
                <div class="mt-2">
                  <h6 class="text_clamp_1">${obj.title}</h6>
                  <p class="text_clamp_2">${obj.artist.name}</p>
                </div>
              </div>`
                
                document.querySelector(".shows-to-try-container").appendChild(showsToTryNode)
            }

})

.catch(err => {
	console.error(err);
});

}
//  END of the Shows To Try Section





























loadMorningSection("eminem")
loadRecentlyPlayed("Metallica")
loadShowsToTry("podcast")
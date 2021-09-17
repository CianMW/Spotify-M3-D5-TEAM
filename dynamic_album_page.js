window.onload = () => {

    const id = new URLSearchParams(window.location.search).get("id")
    console.log(id)

    fetch("https://deezerdevs-deezer.p.rapidapi.com/" + id, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "c0dbb0022bmshdac5721511fc351p152251jsndd5434dfa369"
        }
    })

        .then(resp => resp.json())
        .then((data => {
            console.log(data)

            const albumCont = document.querySelector("#album-cont");
            albumCont.innerHTML = "";

            for (let i = 0; i < body.length; i++) {
                const album = body[i];
                console.log(album);

                albumCont.innerHTML += `

            <div class="container-fluid">
                <div class="row">
                    <div class="col-3 pl-0">

                    <div class="container col-12 mt-5 text-white" id="album-cont">
                    <div class="d-flex" >
                      <img src="${album.cover_medium}" class="album_image" width="200" height="200" alt="">
                      <div  class="ml-3 align-self-end">
                        <h6 class="album_title">Album</h6>
                        <h2 class="album_title "><b>${album.title}</b><p id="demo"></p></h2>
                        <div class="d-flex">
                          <img src="./assets/small_profile_picture.jpg" class="profile_picture" width="25" height="25" alt="">
                          <h6 class="ml-1 mr-1 album_title">${album.artist.name}</h6>
                          <p class="album_title"><span class="mr-1 ml-1">&sdot;</span>${album.release_date}<span class="mr-1 ml-1 ">&sdot;</span>${album.nb_tracks} songs, ${album.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 pl-0 song_container_background mt-4">
                    <div class="col-12 mt-5">
                      <div class="text-white h3 d-flex align-items-center" >
                        <img src="./assets/spotify_play_btn.jpg" class="profile_picture play_logo" width="50" height="50" alt="">
                        <i class="bi bi-heart ml-3 album_icons " ></i>
                        <i class="bi bi-three-dots ml-3 album_icons"></i>
                        <button class="btn-info ml-5" style="font-size: small;" onclick="toggleMode()">Toggle mode</button>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="text-white d-flex justify-content-between" >
                        <p>#</p>
                        <p class="song_aligment">Title</p>
                        <div id="hourglass" class="fa"></div>
                      </div>
                      <hr>
                    </div>
                    <div class="col-12 song_container" >
                      <div class="d-flex text-white justify-content-between">
                        <p>1</p>
                        <div class="song_aligment">
                          <p class="mb-0 songs">20th Century Fox Hanfare <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i></p>
                            <p class="songs">Queen </p>  
                          </div>
                        <p>0:25</p>                
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            `

            albumCont.appendChild(album)

            .catch((err) => {
                console.error(err.message);
              });

            }

/* const loadAlbums = (query = "music") => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/album/album_id_here" + query, {
    method: "GET",
    headers: {
      Authorization: "0c20b1c2fd4a50d41fe27a3bc72e04aee2184c17"
    }
  })

  .then(resp => resp.json())
  .then(data => console.log(data))

  const row = document.querySelector("#album-card");
  row.innerHTML = "";

}

window.onload = () => {
  loadAlbums()
  console.log()
} */
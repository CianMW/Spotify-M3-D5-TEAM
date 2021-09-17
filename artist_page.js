let artistInfo = []
let trackList = []

fetchArtist = () => {
    const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMDkxOTJkNTI2MjAwMTViNmRjZjgiLCJpYXQiOjE2MzE4ODMwNTQsImV4cCI6MTYzMzA5MjY1NH0.dq1LWSxg1Ipw9S6BTDun-au0MF--2ZcrSo0k8o1JA8Q");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/412", requestOptions)
  .then(response => response.json())
//   .then(data => console.log(data))
  .then((data) => {
      artistInfo[0] = data;
      console.log(data.id);
      console.log(data.name);
      console.log(data.nb_album);
      getTracklist(data.tracklist);
  })
  .catch(error => console.log('error', error));


}

// Gets the list of tracks from url obtained from API call above passed as (data.tracklist)
function getTracklist(url) {
    fetch(url)
      .then((r) => r.json())
      .then((_tracks) => {
        trackList = _tracks;
        console.log(trackList);
        displayTracklist();
      })
      .catch((err) => console.error(err.message));
  }

console.log("HEY THERE", artistInfo)

const artistSection = document.querySelector("div.ml-3.mt-4")

//time formatting function from stack overflow
// https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds

function fancyTimeFormat(duration)
{   
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}


function displayTracklist () {
    artistSection.innerHTML = "";
    console.log("BANZAI", trackList)
    //forEach would work here but must use trackList.data and not trackList
    for( const track of trackList.data) {
        
        duration = fancyTimeFormat(track.duration)

        artistSection.innerHTML += `
        <!--TRACK -->
        <div class="d-flex align-items-center justify-content-between mt-1">
        <div class="d-flex align-items-center" style="width: 41%;">

            <div class="d-flex align-items-center justify-content-between" style="width: 90px;">
              <p class="m-0" style="color:#fff;opacity:0.6;">1</p>
              <div class="mr-3">
                  <img src=${track.album.cover_small} width="50px" height="50px">
              </div>
            </div>

            <p class="m-0" style="color:#fff;">${track.title_short}</p>
        </div>
        <!--<p class="m-0" style="color:#fff;opacity:0.6; font-size: 0.9rem">1.013,238,772</p>-->
          <p class="m-0" style="color:#fff;opacity:0.6; font-size: 0.9rem">${duration}</p>
        </div>
        <!-- TRACK END -->
        `
    } 
}

{/* <div class="ml-3 mt-4">


                          <!--TRACK -->
                            <div class="d-flex align-items-center justify-content-between mt-1">
                            <div class="d-flex align-items-center" style="width: 41%;">

                                <div class="d-flex align-items-center justify-content-between" style="width: 90px;">
                                  <p class="m-0" style="color:#fff;opacity:0.6;">1</p>
                                  <div class="mr-3">
                                      <img src="./assets/queen.jpeg" width="50px" height="50px">
                                  </div>
                                </div>

                                <p class="m-0" style="color:#fff;">Another one bites the
                                  dust</p>
                            </div>
                              <p class="m-0" style="color:#fff;opacity:0.6; font-size: 0.9rem">1.013,238,772</p>
                              <p class="m-0" style="color:#fff;opacity:0.6; font-size: 0.9rem">55:33</p>
                            </div>
                            <!-- TRACK END -->
                          <!--TRACK -->
                            <div class="d-flex align-items-center justify-content-between mt-2">
                            <div class="d-flex align-items-center" style="width: 41%;">

                                <div class="d-flex align-items-center justify-content-between" style="width: 90px;">
                                  <p class="m-0" style="color:#fff;opacity:0.6;">2</p>
                                  <div class="mr-3">
                                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vC2TaEVHTI_bqN_CrR89fYoIXYmA9mTjvEdCtzg&amp;usqp=CAE&amp;s" width="50px" height="50px">
                                  </div>
                                </div>

                                <p class="m-0" style="color:#fff;">Queen II</p>
                            </div>
                              <p class="m-0" style="color:#fff;opacity:0.6; font-size: 0.9rem">4.112,435,643</p>
                              <p class="m-0" style="color:#fff;opacity:0.6; font-size: 0.9rem">46:23</p>
                            </div>
                            <!-- TRACK END -->
                          <!--TRACK -->
                            <div class="d-flex align-items-center justify-content-between mt-2">
                            <div class="d-flex align-items-center" style="width: 41%;">

                                <div class="d-flex align-items-center justify-content-between" style="width: 90px;">
                                  <p class="m-0" style="color:#fff;opacity:0.6;">3</p>
                                  <div class="mr-3">
                                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjy3zpmlGjzSpmW3g3qxvgeU_jSor8PnVEKmPSO1s&amp;usqp=CAE&amp;s" width="50px" height="50px">
                                  </div>
                                </div>

                                <p class="m-0" style="color:#fff;">A Night at the Opera</p>
                            </div>
                              <p class="m-0" style="color:#fff;opacity:0.6; font-size: 0.9rem">3.234,456,453</p>
                              <p class="m-0" style="color:#fff;opacity:0.6; font-size: 0.9rem">35:34</p>
                            </div>
                            <!-- TRACK END -->
                          <!--TRACK -->
                            <div class="d-flex align-items-center justify-content-between mt-2">
                            <div class="d-flex align-items-center" style="width: 41%;">

                                <div class="d-flex align-items-center justify-content-between" style="width: 90px;">
                                  <p class="m-0" style="color:#fff;opacity:0.6;">4</p>
                                  <div class="mr-3">
                                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTP6IuizpJTSzXnsWtcB5bvJc5lY_5rHZou8SOOGI&amp;usqp=CAE&amp;s" width="50px" height="50px">
                                  </div>
                                </div>

                                <p class="m-0" style="color:#fff;">Innuendo</p>
                            </div>
                              <p class="m-0" style="color:#fff;opacity:0.6; font-size: 0.9rem">1.234,435,123</p>
                              <p class="m-0" style="color:#fff;opacity:0.6; font-size: 0.9rem">41:54</p>
                            </div>
                            <!-- TRACK END -->
                          <!--TRACK -->
                            <div class="d-flex align-items-center justify-content-between mt-2">
                            <div class="d-flex align-items-center" style="width: 41%;">

                                <div class="d-flex align-items-center justify-content-between" style="width: 90px;">
                                  <p class="m-0" style="color:#fff;opacity:0.6;">5</p>
                                  <div class="mr-3">
                                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPIk1AU8iRXRw_d24P-NkBMV8AzpLsMW-M9Dbckc&amp;usqp=CAE&amp;s" width="50px" height="50px">
                                  </div>
                                </div>

                                <p class="m-0" style="color:#fff;">Sheer Heart Attack</p>
                            </div>
                              <p class="m-0" style="color:#fff;opacity:0.6; font-size: 0.9rem">2.234,123,234</p>
                              <p class="m-0" style="color:#fff;opacity:0.6; font-size: 0.9rem">47:43</p>
                            </div>
                            <!-- TRACK END -->
                          

                            <p class="m-0 mt-3 text-white" style="font-size: 0.8rem; letter-spacing: 0.8px; opacity: 0.6;">SEE MORE</p>
                        </div> */}

window.onload = () => {
    fetchArtist()
}
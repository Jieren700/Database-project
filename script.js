let Songs;
function init(){
  $.ajaxSetup({async: false});
  
  // Ensure Lesson_51_DBserver replit is running!
  let link = "http://localhost:8500";//replace with your Dev URL
  let route= "/Songs";
  Songs = $.getJSON(link+route).responseJSON;

  generateCards(Songs);
}
//build += `<div class="card" >`
    //build += `<h3> Song ID : ${song.songId}</h3>`;
    //build += `<div> Song Name: ${song.songName}</div>`;
    //build += `<div> Artist Name: ${song.artistName}</div>`;
    //build += `<div> Date of Release: ${song.dateReleased}</div>`;
    //build += `<div> Genre: ${song.genre}</div>`;
    //build += `<img src='songs/${song.songName}.PNG'>`;
    //build += `<hr>`;
    //build += `</div>`;
function generateCards(Songs){
  let centerpanel = document.getElementById("centerpanel");
  let build ="";

  for(let i=0; i<Songs.length; i++){
    let song = Songs[i];
    let build ="";
    let frontContent = `
      <img src='songs/${song.songName}.PNG'>
      <h2>${song.songName}</h2>`;
    
    let backContent = `
      <h3> By: ${song.artistName}</h3>
      <h3> Song ID: ${song.songId}</h3>
      <h5> Song Rease Date: ${song.dateReleased}</h5>
      <p> Genre: ${song.Genre}</p>
    `;

    build += flipcard(frontContent, backContent);
    
  }
  // Now inject the build content into the output container
  centerpanel.innerHTML = build;
}

function flipcard(front, back) {
  return `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          ${front}
        </div>
        <div class="flip-card-back">
          ${back}
        </div>
      </div>
    </div>
  `;
}
 

function filterBySongName(){
    let sname = document.getElementById("songname").value;
    console.log(sname);

    let songList = [];

    for(let i=0; i<Songs.length; i++){
        let song = Songs[i]
        if(song.songName == sname){
            songList.push(song);
        }
    }
    console.log(`number found ${songList.length}`);
    generateCards(songList);
}

function filterByGenre(){
  let genretype = document.getElementById("genres").value;
  console.log(genretype);

  let genreList = []; //create a list of songs searched for
  
  for(let i=0; i<Songs.length;i++){
    let song = Songs[i] //get each song
    //make sure the list is no
    if( song.Genre == genretype ) {
          //add to the new list
          genreList.push(song);
    }
  }
  console.log(`number found ${genreList.length}`);
  generateCards(genreList);  
}
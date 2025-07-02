let Artists;
function init(){
  $.ajaxSetup({async: false});
  
  // Ensure Lesson_51_DBserver replit is running!
  let link = "http://localhost:8500";//replace with your Dev URL
  let route= "/artists";
  Artists = $.getJSON(link+route).responseJSON;

  generateCards(Artists);
}

function generateCards(Artists){  
  let output = document.getElementById("centerpanel");
  let build ="";
  
  for(let i=0; i<Artists.length; i++){
    let artist = Artists[i];
    let build="";
    let frontContent = `
      <h2>${artist.ArtistName}</h2>  
      <img src='artist/${artist.ArtistName}.PNG'>`;
    
    let backContent = `
      <h3> Date Of Birth: ${artist.DateOfBirth}</h3>
      <h3> Song ID: ${artist.ArtistId}</h3>
      <p> Age: ${artist.Age}</p>
    `;

    build += flipcard(frontContent, backContent);
    
  }
  
  // Now inject the build content into the output container
  output.innerHTML = build;
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

function filterByAge(){
  let artistAge = document.getElementById("age").value;

  let newArtists = []; //create a list of songs searched for
  
  for(let i=0; i<Artists.length;i++){
    let artist = Artists[i] //get each artists
    //make sure the list is no
    if( artist.Age == artistAge ) {
          //add to the new list
          newArtists.push(artist);
       }
  }
  generateCards(newArtists);  
}

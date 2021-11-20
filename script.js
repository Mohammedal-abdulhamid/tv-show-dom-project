//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();

function setup() {
  //console.log(allEpisodes);
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  // number of listed episodes
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  // inputs search bar

  const mainContent = document.getElementById("main_content");
  mainContent.innerHTML = "";
  const episodeUl = document.createElement("ul");
  const listAllEpisodes = episodeList.forEach((episode) => {
    const cardContainer = document.createElement("li");
    
    const creatEpisodeName = document.createElement("h1");
    creatEpisodeName.innerHTML = episode.name;
    const creatEpisodeSeason = document.createElement("h2");
    creatEpisodeSeason.innerHTML = "season #" + episode.season;
    const creatEpisodeNumber = document.createElement("h2");
    creatEpisodeNumber.innerHTML = "episode number" + episode.number;
    //creat episode code
    const creatEpisodeCode = document.createElement("h3");
    creatEpisodeCode.innerHTML = `${
      "S0" + episode.season + "E0" + episode.number
    }`;
    // creat imge and assign its src
    const creatImage = document.createElement("img");
    creatImage.src = episode.image.medium;
    // creat the summary <p>
    const creatPElement = document.createElement("P");
    creatPElement.innerHTML = episode.summary;
    //creat the reference <p>
    const creatReference = document.createElement("p");
    // append all created element to cardContainer
    creatReference.innerHTML = "Reference: " + episode._links.self.href;
    cardContainer.appendChild(creatEpisodeName);
    cardContainer.appendChild(creatEpisodeSeason);
    cardContainer.appendChild(creatEpisodeNumber);
    cardContainer.appendChild(creatEpisodeCode);
    cardContainer.appendChild(creatImage);
    cardContainer.appendChild(creatPElement);
    cardContainer.appendChild(creatReference);
    // append card container to th Ul element

    episodeUl.appendChild(cardContainer);
  });

  mainContent.appendChild(episodeUl);
}
window.onload = setup;

// add the search function
 function searchFunction (arr){
const searchBar = document.getElementById("search_bar");
searchBar.addEventListener("keyup", (e) => {
  const searchInput = e.target.value;

  const lowerCasedInput = searchInput.toLowerCase();
  //console.log(lowerCasedInput);
  let filteredArr = arr.filter((episode) => {
    return (
      episode.name.toLowerCase().includes(lowerCasedInput) ||
      episode.summary.toLowerCase().includes(lowerCasedInput)
    );
  });

  //console.log(filteredALLEpisodes);
  if (filteredArr.length > 0) {
    makePageForEpisodes(filteredArr);
  } else {
    makePageForEpisodes(arr);
  }




  // add the select drop-down list

  const getselectBar = document.getElementById("select_bar");
  getselectBar.innerHTML = "";
  filteredArr.forEach((episode) => {
    const creatOption = document.createElement("option");

    let codeAndName = `${
      "S0" + episode.season + "E0" + episode.number + "-" + episode.name
    }`;
    creatOption.innerHTML = codeAndName;
    getselectBar.appendChild(creatOption);
  });
  getselectBar.addEventListener("change", (e) => {
    e.target.value;
    //console.log(selectvalue);
    const selectedEpisode = filteredArr.filter((episode) => {
      return e.target.value.includes(
        "S0" + episode.season + "E0" + episode.number + "-" + episode.name
      );
    });
    makePageForEpisodes(selectedEpisode);
  });
});
};

searchFunction(allEpisodes);


function listAllShows(id) {
  
    fetch(`https://api.tvmaze.com/shows/${id}/episodes`).then((res) => {
      res.json().then((data) => {
        if (data.length > 0) {
          let episodeCard = "";
           
          data.forEach((episode) => {
            episodeCard += `
          <ul>
            <li><img src="${episode.image.medium}"></li>
            <li>${episode.name}</li>
            <li>Season: ${episode.season}</li>
            <li>Episode: ${episode.number}</li>
            <li>${episode.summary}</li>
          </ul>`;
          }); // forEach
           searchFunction(data);
           document.getElementById("main_content").innerHTML = episodeCard;
        }  // if 

        
      }); // then 
     
    });  // then

   

};
 
listAllShows(1632);

//console.log(getAllShows());
const allshows = getAllShows();
 document.getElementById("select_show_bar").innerHTML ="";
 
allshows.forEach(show =>{
 const  options = document.createElement("option");
  options.innerHTML = show.name 
  options.value = show.id;
  document.getElementById("select_show_bar").appendChild(options)

});
document.getElementById("select_show_bar").addEventListener("change",(e)=>{
  document.getElementById("search_bar").value ="";
   document.getElementById("select_bar").innerHTML= "";
  const selectValue = e.target.value;
  listAllShows(selectValue);
  
});




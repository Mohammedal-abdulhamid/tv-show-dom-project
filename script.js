//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  //console.log(allEpisodes);
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  const mainContent = document.getElementById("main_content");
  const episodeUl = document.createElement("ul");
  episodeList.forEach((episode) => {
    const cardContainer = document.createElement("li");
    const creatEpisodeName = document.createElement("h1");
    creatEpisodeName.innerHTML = episode.name;
    const creatEpisodeSeason = document.createElement("h2");
    creatEpisodeSeason.innerHTML = "season #" + episode.season;
    const creatEpisodeNumber = document.createElement("h2");
    creatEpisodeNumber.innerHTML = "episode number" + episode.number;
    //features 3 of the requirement
    const creatEpisodeCode = document.createElement("h3");
    creatEpisodeCode.innerHTML = `${
      "Code:" + " " + "S0" + episode.season + "E0" + episode.number
    }`;

    const creatImage = document.createElement("img");
    creatImage.src = episode.image.medium;
    const creatPElement = document.createElement("P");
    creatPElement.innerHTML = episode.summary;
    const creatReference = document.createElement("p");
    creatReference.innerHTML = "Reference: " + episode._links.self.href;
    cardContainer.appendChild(creatEpisodeName);
    cardContainer.appendChild(creatEpisodeSeason);
    cardContainer.appendChild(creatEpisodeNumber);
    cardContainer.appendChild(creatEpisodeCode);

    cardContainer.appendChild(creatImage);

    cardContainer.appendChild(creatPElement);
    cardContainer.appendChild(creatReference);

    episodeUl.appendChild(cardContainer);
  });
  mainContent.appendChild(episodeUl);
}
window.onload = setup;

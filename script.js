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

    const creatImage = document.createElement("img");
    creatImage.src = episode.image.medium;

    cardContainer.appendChild(creatEpisodeName);
    cardContainer.appendChild(creatEpisodeSeason);
    cardContainer.appendChild(creatEpisodeNumber);

    cardContainer.appendChild(creatImage);
    const creatPElement = document.createElement("P");
    creatPElement.innerHTML = episode.summary;
    cardContainer.appendChild(creatPElement);

    episodeUl.appendChild(cardContainer);
  });
  mainContent.appendChild(episodeUl);
}
window.onload = setup;

const searchedTerm = [];
const apiUrl = "https://api.lyrics.ovh";
const result = document.getElementById("result");
const more = document.getElementById("more");

document.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    console.log("enter");
    callSearchSong();
  }
});
const callSearchSong = () => {
  const inputElement = document.getElementById("inputTerm");
  const term = inputElement.value;
  if (term) {
    searchSongs(term);
  } else {
    alert("Please type in a search term");
  }
};
async function searchSongs(term) {
  const res = await fetch(`${apiUrl}/suggest/${term}`);
  const data = await res.json();
  showData(data);
  console.log(data);
}
function showData(data) {
  if (data.data.length === 0) {
    alert("Enter another song");
  } else {
    result.innerHTML = `
    <ul class="songs">
      ${data.data
        .map(
          (song) => `<li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span>
      <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
    </li>`
        )
        .join("")}
    </ul>
  `;

    if (data.prev || data.next) {
      more.innerHTML = `
        ${
          data.prev
            ? `<button class="btn page" onclick="getMoreSongs('${data.prev}')">Prev</button>`
            : ""
        }
        ${
          data.next
            ? `<button class="btn page" onclick="getMoreSongs('${data.next}')">Next</button>`
            : ""
        }
      `;
    } else {
      more.innerHTML = "";
    }
  }
}
async function getMoreSongs(url) {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  const data = await res.json();
  console.log(data);
  showData(data);
}
async function getLyrics(artist, songTitle) {
  const res = await fetch(`${apiUrl}/v1/${artist}/${songTitle}`);
  const data = await res.json();

  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");

  result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>`;

  more.innerHTML = "";
}

result.addEventListener("click", (e) => {
  const clickedEl = e.target;
  if (clickedEl.tagName === "BUTTON") {
    const artist = clickedEl.getAttribute("data-artist");
    const songTitle = clickedEl.getAttribute("data-songtitle");
    getLyrics(artist, songTitle);
  }
});
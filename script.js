document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("songGrid");
  const searchInput = document.getElementById("searchBar");

  fetch("songs.json")
    .then(res => res.json())
    .then(songs => {
      function renderSongs(filter = "") {
        grid.innerHTML = "";
        songs
          .filter(song => song.title.toLowerCase().includes(filter.toLowerCase()))
          .forEach(song => {
            grid.innerHTML += `
              <a href="${song.link}" class="bg-gray-800 rounded-xl shadow-lg hover:bg-yellow-400 hover:text-black transition p-4">
                <img src="${song.image}" alt="${song.title}" class="rounded-md mb-3 w-full h-48 object-cover">
                <h3 class="text-xl font-bold">${song.title}</h3>
                <p class="text-sm text-gray-400">${song.movie} • ${song.artist} • ${song.year}</p>
              </a>
            `;
          });
      }

      renderSongs();

      searchInput.addEventListener("input", () => {
        renderSongs(searchInput.value);
      });
    });
});


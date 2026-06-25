const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");

function displayResults(items) {
  results.innerHTML = "";

  if (items.length === 0) {
    results.innerHTML = `
      <div class="card">
        <h3>No results found</h3>
        <p>Try another tray, instrument, shelf, or location.</p>
      </div>
    `;
    return;
  }

  items.forEach(item => {
    results.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <p><strong>ID:</strong> ${item.id}</p>
        <p><strong>Specialty:</strong> ${item.specialty}</p>
        <p><strong>Shelf:</strong> ${item.shelf}</p>
        <p><strong>Location:</strong> ${item.location}</p>
      </div>
    `;
  });
}

function runSearch() {
  const query = searchInput.value.toLowerCase().trim();

  if (query === "") {
    displayResults(instruments);
    return;
  }

  const filtered = instruments.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.id.toLowerCase().includes(query) ||
    item.specialty.toLowerCase().includes(query) ||
    item.shelf.toLowerCase().includes(query) ||
    item.location.toLowerCase().includes(query)
  );

  displayResults(filtered);
}

searchInput.addEventListener("keyup", runSearch);
searchButton.addEventListener("click", runSearch);

displayResults(instruments);
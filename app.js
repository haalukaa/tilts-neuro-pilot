const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

function display(data) {
    results.innerHTML = "";

    data.forEach(item => {
        results.innerHTML += `
            <div class="card">
                <h3>${item.name}</h3>
                <p><strong>ID:</strong> ${item.id}</p>
                <p><strong>Shelf:</strong> ${item.shelf}</p>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Specialty:</strong> ${item.specialty}</p>
            </div>
        `;
    });
}

display(instruments);

searchInput.addEventListener("keyup", () => {

    const search = searchInput.value.toLowerCase();

    const filtered = instruments.filter(item =>
        item.name.toLowerCase().includes(search) ||
        item.id.toLowerCase().includes(search) ||
        item.shelf.toLowerCase().includes(search) ||
        item.location.toLowerCase().includes(search)
    );

    display(filtered);

});

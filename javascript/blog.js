// Extract JSON file path from URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const jsonFilePath = urlParams.get('json');

if (!jsonFilePath) {
    console.error('JSON file path not provided in URL query parameters.');
} else {
    // Fetch JSON data
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            // Set document title
            document.title = data.nickname;
            
            // Replace elements with data from JSON
            document.querySelector('.pfp img').src = data.pfp;
            document.querySelectorAll('.details')[0].textContent = data.nickname;
            document.querySelectorAll('.details')[1].textContent = "Posted by: " + data.poster;
            document.querySelectorAll('.OSF')[0].textContent = data.osf;
            document.querySelector('.story').innerHTML = `<p>${data.blog}</p>`;

            // Populate links
            const linksContainer = document.querySelector('.links');
            data.links.forEach(link => {
                const linkElement = document.createElement('a');
                linkElement.href = link;
                linkElement.textContent = link;
                linksContainer.appendChild(linkElement);
                linksContainer.appendChild(document.createElement('br'));
            });

            // Set posterLink
            const posterLinkElement = document.querySelector('.posterLink');
            posterLinkElement.href = data.posterLink;
            posterLinkElement.querySelector('.details').textContent = "Poster Link"; // You can modify this text as needed
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

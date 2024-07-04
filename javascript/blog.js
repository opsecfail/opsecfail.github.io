// Function to parse query parameters from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to load JSON file and update HTML elements
function loadBlogContent() {
    const filecase = getQueryParam('filecase');
    if (!filecase) {
        console.error('No filecase parameter provided.');
        return;
    }

    const jsonFilePath = `storage/blogs/${filecase}.json`;

    fetch(jsonFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update HTML elements with data from JSON
            document.getElementById('comrade').textContent = data.nickname;
            document.getElementById('poster').textContent = data.poster;
            document.querySelector('.OSF').textContent = data.osf.join(', ');
            document.querySelector('.story p').innerHTML = data.blog;
            // Assuming links are a list of URLs
            const linksElement = document.querySelector('.links');
            linksElement.innerHTML = data.links.map(link => `<a href="${link}">${link}</a>`).join('<br>');

            // Assuming pfp is the path to the profile picture
            const pfpElement = document.querySelector('.pfp img');
            pfpElement.src = data.pfp;
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}

// Call the function to load the blog content when the page loads
document.addEventListener('DOMContentLoaded', loadBlogContent);

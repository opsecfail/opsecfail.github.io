// Function to fetch the view count from a text file
async function fetchViews(viewFileName) {
    try {
        const response = await fetch(viewFileName);
        const viewsText = await response.text();
        const views = parseInt(viewsText);
        return views;
    } catch (error) {
        console.error('Error fetching views:', error);
        return null;
    }
}

// Function to fetch and generate profiles
async function generateProfiles() {
    const profilesDiv = document.getElementById('profiles');
    try {
        // Fetch the list of JSON files
        const response = await fetch('storage/blogs/list.json');
        const fileList = await response.json();

        // Iterate through each JSON file
        for (const file of fileList) {
            // Fetch the data from each JSON file
            const fileResponse = await fetch(`storage/blogs/${file}`);
            const data = await fileResponse.json();

            // Fetch the filename for the view count
            const viewFileName = data.views;

            // Create profile anchor tag
            const profileLink = document.createElement('a');
            profileLink.href = `blog.html?json=storage/blogs/${file}`; // Adjust href based on your URL structure
            profileLink.classList.add('profile-link');
            profileLink.setAttribute('target', '_blank'); // Open link in new tab/window

            // Create profile div
            const profileDiv = document.createElement('div');
            profileDiv.classList.add('profile');

            // Generate profile content based on JSON data and fetched views
            profileDiv.innerHTML = `
                <div class="pfp"><img src="${data.pfp}"></div>
                <div class="nickname"><p>${data.nickname}</p></div>
                <div class="details"><p>${data.details}</p></div>
                <div class="poster"><p>POSTER:</p><p>${data.poster}</p></div>
                <div class="OSF"><p>OSF:</p><p>${data.osf.join(', ')}</p></div>
                <div class=checked>
                    <div class="verified"><p>${data.verified.toUpperCase()}</p></div>
                </div>
            `;

            // Adjust background color based on verification status
            if (data.verified.toLowerCase() === 'verified') {
                profileDiv.querySelector('.checked').style.backgroundColor = '#12a0021a';
            } else {
                profileDiv.querySelector('.checked').style.backgroundColor = '#ff03031f';
            }

            // Append the profile div to the profile anchor tag
            profileLink.appendChild(profileDiv);

            // Append the profile anchor tag to the profiles container
            profilesDiv.appendChild(profileLink);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to generate profiles when the page loads
window.onload = generateProfiles;

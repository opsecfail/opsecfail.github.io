fetch('storage/other/headlines.json')
    .then(response => response.json())
    .then(data => {
        const headlineElement = document.getElementById('headlines');
        data.forEach(item => {
            headlineElement.innerHTML += item.headline + '&nbsp;&nbsp;&nbsp;&nbsp;';
        });
    })
    .catch(error => console.error('Error fetching headlines:'));
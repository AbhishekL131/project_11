document.getElementById('collegeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('http://localhost:5000/find_colleges', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(colleges => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        if (colleges.length > 0) {
            const list = document.createElement('ul');
            colleges.forEach(college => {
                const listItem = document.createElement('li');
                listItem.textContent = college;
                list.appendChild(listItem);
            });
            resultsDiv.appendChild(list);
        } else {
            resultsDiv.textContent = 'No colleges found for the given criteria.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const resultsDiv = document.getElementById('results');
        resultsDiv.textContent = 'An error occurred. Please try again.';
    });
});

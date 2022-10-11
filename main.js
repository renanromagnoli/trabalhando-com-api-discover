const url = 'http://localhost:5000/api'

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(json => apiResult.textContent = JSON.stringify(json))
        .catch(error => console.error(error))
}

function getUser(id) {
    fetch(`${url}/${+id}`)
        .then(response => response.json())
        .then(json => apiResult.textContent = JSON.stringify(json))
        .catch(error => console.error(error))
}

getUser(1)
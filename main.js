const url = 'http://localhost:3000/api'

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(json => apiResult.textContent = JSON.stringify(json))
        .catch(error => console.error(error))
}

function getUser(id) {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            userName.textContent = data.name
            userImg.src = data.avatar
            userCity.textContent = data.city
        })
        .catch(error => console.error(error))
}

//pegar meu usuário do github
//separar os campos q vou usar
function getMyUser() {
    fetch('http://localhost:4000/data')
        .then(response => response.json())
        .then(data => {
            console.log('getMyUser!!!')
            console.log('data name: ', data.name)
            const myUser = {
                name: data.name,
                avatar: data.avatar_url,
                city: 'Ponte Nova'
            }
            console.log(JSON.stringify(myUser))
            addMyUser(myUser)
            getUsers()
        })
        .catch(error => console.log(error))
}

//inserir
function addMyUser(getUser) {
    const myData = JSON.stringify(getUser)
    console.log('myData: ', myData)
    
    fetch(url, {
        method: 'POST',
        body: myData,
        // body: getMyUser,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }})
        .then(response => response.json())
        .then(json => {
            console.log('addMyUser!!!!')
            alertSave.textContent = json
        })
        .catch(error => console.log(error))
    
        
}

// getMyUser()

function changeUser(updateUser) {

    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updateUser),
        headers: {"Content-type": "apllication/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(result => {
        console.log('resultado do changeUser: ', result)
        alertSave.textcontent = result
    })
}
function deleteUser(updateUser) {

    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {"Content-type": "apllication/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(result => {
        alertSave.textcontent = result
    })
}

const user = {
    id: 1,
    name: 'Arthur',
    city: 'Milão'
}

changeUser(user)

// const myUser = {
//     name: 'Renan',
//     avatar: 'https://avatars.githubusercontent.com/u/25084493?v=4',
//     city: 'Ponte Nova'
// }

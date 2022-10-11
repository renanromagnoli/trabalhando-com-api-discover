const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

app.use(express.json())

function calcBirth(myBirthDay = '1986-05-13') {
    let dateNow = new Date(Date.now()).toISOString().split('T')[0]
    let calcYears = ((new Date(dateNow) - new Date(myBirthDay)) / (1000 * 60 * 60 * 24) / 365).toFixed()
    
    return +calcYears
}

// let myData = {
//     nome: 'Renan',
//     idade: calcBirth()
// }


app.route('/')
    .get(async(req, res) => {
        try {
            const { data } = await axios.get('http://localhost:5000/api')
            // console.log(data)
            res.send(data)
        } catch (error) {
            console.error(error)
        }

    })
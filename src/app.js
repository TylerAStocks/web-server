const path = require('path')
const express = require('express')


const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')


app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Tyler Stocks'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Tyler Stocks'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        msg: 'This is the help page'
    })
})



app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Partly Cloudy, 70F',
        location: 'Chesapeake, VA'
    })
})





// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
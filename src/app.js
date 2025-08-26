const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
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
        name: 'Tyler Stocks'
    })
})



app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Partly Cloudy, 70F',
        location: 'Chesapeake, VA'
    })
})


app.get('/help/*splat', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Tyler Stocks',
        errorMessage: 'Help article not found'
    })
})

app.get('/*splat', (req, res) => {
        res.render('404', {
        title: '404',
        name: 'Tyler Stocks',
        errorMessage: 'Page not found'
    })
})





// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
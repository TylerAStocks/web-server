const request = require('request')
require('dotenv').config();

const apiKey = process.env.WEATHERSTACK_API_KEY;


const forecast = (latitude, longitude, label, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${latitude},${longitude}&units=f`

    request({ url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (response.body.current === undefined) {
            callback('unable to get weather', undefined)
        } else {
            const {weather_descriptions, temperature, feelslike } = response.body.current
            callback(undefined, {
                weather_description: weather_descriptions[0],
                temperature,
                feelslike,
                label,
            })
        }
    })

}


module.exports = forecast
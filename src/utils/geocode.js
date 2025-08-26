const request = require('request')
require('dotenv').config();

const apiKey = process.env.POSITIONSTACK_API_KEY;


const geocode = (address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?limit=1&access_key=${apiKey}&query=${address}`

    request({ url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if ( !response.body.data || response.body.data.length === 0) {
            callback('unable to find location', undefined)
        } else {
            const { latitude, longitude, label } = response.body.data[0]
            callback(undefined, {
                latitude,
                longitude,
                label,
            })
        }
    })

}


module.exports = geocode
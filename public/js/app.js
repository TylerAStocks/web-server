console.log('Client side javascript file')



const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchElement.value

    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
            messageTwo = data.error
        } else {
            console.log(data.location)
            console.log(data.forecast)
            const {weather_description, temperature, feelslike} = data.forecast
            messageOne.textContent = `${data.location}: ${weather_description}, it is ${temperature}F outside, and it feels like ${feelslike}F`
        }
    })
})

    console.log(location)
})

const request = require('postman-request');


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=83ca3828472391608b08bfa45b7335b0&query=' + latitude + ',' + longitude;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            //callback(undefined, {
            //    temperature: body.current.temperature,
            //    humidity: body.current.humidity,
            //})
            
            const temperature = body.current.temperature;
            const humidity = body.current.humidity;
            const weatherDescription = body.current.weather_descriptions[0];
            const time = body.current.observation_time;
            callback(undefined, `${weatherDescription}. It is now ${time} and the temperature is ${temperature} degrees. Humidity is ${humidity} percent.`)
        }
    })
}



module.exports = forecast;
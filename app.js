const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

geocode(address, (error, {place, latitude, longitude} = {}) => {
    if (address){
        if (error){
            console.log(error)
        }
        else{
            console.log(place)
            forecast(latitude, longitude, (error, forecastdata) => {
                if (error){
                    console.log(error)
                }
                else{
                    console.log(forecastdata)
                }
              })
        }
    } else{
        console.log('Please enter an address')
    }
})

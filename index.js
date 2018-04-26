let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }

  setTrip(trip){
    return trip.id == tripId
  }

  trips(){
    return store.trips.filter( (trip) => {
      trip.id === tripId
      return ["tripId"]
    })
  }

  passengers(){
    return store.passengers.filter( (pass) => {
      driverId === ["trip"]["driverId"]
      return pass.name
    })
  }

}


class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name


    store.passengers.push(this)
  }
  setTrip(trip){
    return trip.id == tripId
  }

  trips(){
    return store.trips.filter( (trip) => {
      trip.id === this.tripId
      return ["tripId"]
    })
  }
  drivers(){
    return store.drivers.filter( (driver) => {
      passengerId === ["trip"]["passengerId"]
      return driver.name
    })
  }
}

class Trip{
  constructor(driver, passenger){
  this.id = ++tripId

  this.setDriver(driver)
  this.setPassenger(passenger)
  store.trips.push(this)
  }

  setPassenger(passenger){
     this.passengerId = passenger.id
   }

  setDriver(driver){
     this.driverId = driver.id
   }

   passenger(){

      return store.passengers.find( passenger => {
        console.log(this)
        return passenger.id === this.passengerId

      })
    }

   driver(){
      return store.drivers.find( driver => {
        return driver.id === this.driverId
      })
    }
}

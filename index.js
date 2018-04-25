let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter( trip => this.id === trip.driverId )
  }

  passengers() {
    let myTrips = this.trips()

    return myTrips.map( trip => trip.passenger() )
  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId

    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter( trip => this.id === trip.passengerId )
  }

  drivers() {
    let myTrips = this.trips()

    return myTrips.map( trip => trip.driver() )
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id

    store.trips.push(this)
  }

  driver() {
    return store.drivers.filter( driver => this.driverId === driver.id )[0]
  }

  passenger() {
    return store.passengers.filter( passenger => this.passengerId === passenger.id )[0]
  }
}

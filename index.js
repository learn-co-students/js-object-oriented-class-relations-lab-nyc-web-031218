let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store["drivers"].push(this)
  }

  trips() {
    return store["trips"].filter((trip) => trip.driverId === this.id)
  }

  passengers() {
    const passengers = []
    const passengerIds = this.trips().map((trip) => trip.passengerId)
    for(const pId of passengerIds){
      passengers.push(store["passengers"].find((passenger) => passenger.id === pId))
    }
    return passengers
  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store["passengers"].push(this)
  }

  trips() {
    return store["trips"].filter((trip) => trip.passengerId === this.id)
  }

  drivers() {
    const drivers = []
    const driverIds = this.trips().map((trip) => trip.driverId)
    for(const dId of driverIds){
      drivers.push(store["drivers"].find((driver) => driver.id === dId))
    }
    return drivers
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    store["trips"].push(this)
    this.driverId = driver.id
    this.passengerId = passenger.id
  }

  driver() {
    return store.drivers.find((driver) => driver.id === this.driverId)
  }

  passenger() {
    return store.passengers.find((passenger) => passenger.id === this.passengerId)
  }
}

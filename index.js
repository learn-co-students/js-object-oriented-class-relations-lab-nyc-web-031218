let store = {drivers: [], passengers: [], trips: []}

let driverID = 0
class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverID
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter((trip) => trip.driverId === this.id)
  }

  passengers(){
    return this.trips().map((trip) => trip.passenger())
  }
}

let passengerID = 0
class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerID
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter((trip) => trip.passengerId === this.id)
  }

  drivers(){
    return this.trips().map((trip) => trip.driver())
  }
}

let tripID = 0
class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripID
    store.trips.push(this)
  }

  passenger(){
    return store.passengers.filter((passenger) => passenger.id === this.passengerId)[0]
  }

  driver(){
    return store.drivers.filter((driver) => driver.id === this.driverId)[0]
  }
}

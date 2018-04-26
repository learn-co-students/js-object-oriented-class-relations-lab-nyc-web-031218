let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.id = ++ driverId;
    this.name = name;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter((t) => (t.driverId = this.id));
  }
  passengers(){
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}

class Passenger{
  constructor(name){
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  trips(){
    return store.trips.filter(t => t.passengerId === this.id);

  }
  drivers(){
    return this.trips().map(t => t.driver());
  }
}

class Trip{
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }
  driver(){
    return store.drivers.find(d => d.id === this.driverId);
  }
  passenger(){
    return store.passengers.find(p => p.id === this.passengerId);
  }
}

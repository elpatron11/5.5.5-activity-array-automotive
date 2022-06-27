const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        
        super(make, model, year, color, mileage);
        this.scheduleService = false;
        this.maxPassengers = 5;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
         this.passenger = 0;
        
    }

    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }
      loadPassenger(pas) {
        if (this.passenger < this.maxPassengers) {
            if ((pas + this.passenger) <= this.maxPassengers) {
                this.passenger = pas;
                return this.passenger;               
            } else {
                console.log(this.model  + " not have enough space ");

            }
        } else {
            console.log(this.model + " "+ "is full");
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log ("car started");
            return this.started = true
        } else {
            console.log("cant start (no fuel)");
            return this.started = false;
        }
    }

  


}


let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(6)

myCar.checkService()
myCar.stop()
console.log(myCar)
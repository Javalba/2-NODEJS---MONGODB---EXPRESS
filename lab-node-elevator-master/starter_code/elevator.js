const Person = require('./person.js');
class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
    this.direction = "Up";
    this.stringLog = "";
  }

  management() {
    if (!this.requests.length) {
      console.log("\n|| END ||\n");
      this.stop();
    } else {
      //Enter passengers from waiting list
      for (let i = this.waitingList.length - 1; i >= 0; i--) {
        if (this.floor === this.waitingList[i].originFloor) {
          this._passengersEnter(this.waitingList[i]);
          this.requests.push(this.waitingList[i].destinationFloor);
          this.waitingList.splice(i, 1);
        }
      }

      //Exit passengers
      if (!this.passengers.length) {
        console.log("Nobody is in the elevator right now");
      } else {
        for (let i = this.passengers.length - 1; i >= 0; i--) {
          if (this.floor === this.passengers[i].destinationFloor) {
            this._passengersLeave(i);
          }
        }
      }

      //Delete all requests
      for (let i = this.requests.length - 1; i >= 0; i--) {
        if (this.floor === this.requests[i]) {
          this.requests.splice(i, 1);
        }
      }

      let destination = this.requests[0];
      if (destination >= this.floor) this.direction = "Up";
      else this.direction = "Down";
      this.log();
      switch (this.direction) {
        case "Up":
          this.floorUp();
          break;
        case "Down":
          this.floorDown();
          break;
        default:
      }
    }
  }

  start() {
    this.elevatorLoop = setInterval(() => this.update(), 1000);
  }
  stop() {
    clearInterval(this.elevatorLoop);
  }
  update() {
    console.log("\n*****************************************************************\n\n");
    this.management();
  }

  _passengersEnter(person) {
    this.passengers.push(person);
    console.log("--> PASSANGER ENTER:", person);
  }
  _passengersLeave(index) {
    console.log("<-- PASSANGER EXIT:", this.passengers[index]);
    this.passengers.splice(index, 1);
  }

  floorUp() {
    if (this.floor < 10) {
      this.floor += 1;
    } else {
      this.floor = 10;
      // this.stop();
    }
  }
  floorDown() {
    if (this.floor > 0) {
      this.floor -= 1;
    } else {
      this.floor = 0;
    }
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
    console.log(`${person.name} called elevator at ${person.originFloor} going to ${person.destinationFloor} `);
  }

  log() {
    console.log(`\nWAITING LIST: ${JSON.stringify(this.waitingList)} \nPASSENGGERS: ${JSON.stringify(this.passengers)} \nDirection: ${this.direction} | Floor: ${this.floor} | requests:[${this.requests}]`);
  }
}

module.exports = Elevator;

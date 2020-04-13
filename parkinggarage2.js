let parkingGate = {
    currentKeyFobScanned: "",
    currentPatronNameScanned: "",
    currentTimeKeyFobScanned: "",
    keyFobScannedInParkinglot: [],
    patronNameScannedInParkingLot: [],
    timePatronScannedInParkingLot: [],
    keyFobScannedOutofParkinglot: [],
    patronNameScannedOutOfParkingLot: [],
    timePatronScannedOutOfParkingLot: [],

    inScan: function () {
      if (this.keyFobScannedInParkinglot.includes(this.currentKeyFobScanned)) {
        console.log( `:::WARNING ${this.currentPatronNameScanned} IS ALREADY IN THE PARKING GARAGE!:::`);
      } else {
        this.keyFobScannedInParkinglot.push(this.currentKeyFobScanned);
        this.patronNameScannedInParkingLot.push(this.currentPatronNameScanned);
        this.timePatronScannedInParkingLot.push(this.currentTimeKeyFobScanned);
        console.log(`:::In The Parking Garage ${this.timePatronScannedInParkingLot}:::`);
        console.log( `   ${this.patronNameScannedInParkingLot}: ${this.keyFobScannedInParkinglot}`);
      }
    },

    outScan: function() {
        if (this.keyFobScannedOutofParkinglot.includes(this.currentKeyFobScanned)) {
            console.log( `:::WARNING ${this.currentPatronNameScanned} HAS ALREAYD LEFT THE PARKING GARAGE!:::`);
          } else {
        this.patronNameScannedOutOfParkingLot.push(this.patronNameScannedInParkingLot.splice(this.patronNameScannedInParkingLot.indexOf(this.currentPatronNameScanned),1).pop());
        this.patronNameScannedOutOfParkingLot.push(this.patronNameScannedInParkingLot.splice(this.patronNameScannedInParkingLot.indexOf(this.currentPatronNameScanned),1).pop());
        this.timePatronScannedOutOfParkingLot.push(this.timePatronScannedInParkingLot.splice(this.timePatronScannedInParkingLot.indexOf(this.currentTimeKeyFobScanned), 1 ) .pop());
        console.log(`:::Out Of The Parking Garage ${this.timePatronScannedOutOfParkingLot}:::` );
        console.log(`${this.keyFobScannedOutofParkinglot}`);
        console.log(`${this.patronNameScannedOutOfParkingLot}`);
        console.log(`${this.timePatronScannedOutOfParkingLot}`);
      }
    },
  };


  function keyFobId(id, name, inout, time) {
    parkingGate.currentKeyFobScanned = id;
    parkingGate.currentPatronNameScanned = name;
    parkingGate.currentTimeKeyFobScanned = time;
    if (inout == "in") {
      parkingGate.inScan();
    } else if (inout == "out") {
      parkingGate.outScan();
    }
  }
  keyFobId("12345", "Will", "in", "08:35");
  keyFobId("12345", "Will", "in", "08:45");
  keyFobId("12345", "Will", "out", "09:15");
  keyFobId("12345", "Will", "out", "08:35");
  keyFobId("10101", "Thomas", "out", "07:00");
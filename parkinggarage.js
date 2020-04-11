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



    inScan: function() {
        if (this.keyFobScannedInParkinglot.includes(this.currentKeyFobScanned)) {
            console.log(`${this.currentKeyFobScanned} is already in the parking lot!`)
        } else {
        console.log(`IS IN THE GARAGE:`)
      this.keyFobScannedInParkinglot.push(this.currentKeyFobScanned);
      this.patronNameScannedInParkingLot.push(this.currentPatronNameScanned);
      this.timePatronScannedInParkingLot.push(this.currentTimeKeyFobScanned);
      console.log(this.keyFobScannedInParkinglot);
      console.log(this.patronNameScannedInParkingLot);
      console.log(this.timePatronScannedInParkingLot);
    }

},
    outScan: function() {
        if (this.keyFobScannedOutofParkinglot.includes(this.currentKeyFobScanned)) {
            console.log(`${this.currentKeyFobScanned} has already left the parking lot!`)
        } else {
        console.log(`HAS LEFT THE GARAGE:`)
        this.keyFobScannedOutofParkinglot.push(this.keyFobScannedInParkinglot.splice(this.keyFobScannedInParkinglot.indexOf(this.currentKeyFobScanned), 1));
        this.patronNameScannedOutOfParkingLot.push(this.patronNameScannedInParkingLot.splice(this.patronNameScannedInParkingLot.indexOf(this.currentPatronNameScanned), 1));
        this.timePatronScannedOutOfParkingLot.push(this.timePatronScannedInParkingLot.splice(this.timePatronScannedOutOfParkingLot.indexOf(this.currentTimeKeyFobScanned), 1));
        console.log(this.keyFobScannedOutofParkinglot);
        console.log(this.patronNameScannedOutOfParkingLot);
        console.log(this.timePatronScannedInParkingLot);
    } }
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
  keyFobId("12345", "will", "in", "08:35");
  keyFobId("12345", "will", "out", "09:15");
  keyFobId("45754", "Margie", "in", "5:24");
  keyFobId("87654", "Chelsea", "in", "1:23");
  keyFobId("54321", "Arnell", "in", "9:12");
  keyFobId("54321", "Arnell", "out", "9:45");
  keyFobId("45754", "Margie", "out", "3:45");
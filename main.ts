pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 1) {
        basic.showString("5")
    } else if (pins.digitalReadPin(DigitalPin.P6) == 1) {
        basic.showString("6")
    } else {
    	
    }
})

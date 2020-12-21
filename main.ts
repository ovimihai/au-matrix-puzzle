function turn_led (num: number) {
    if (num <= 3) {
        led.plot(num % 4, 0)
    } else if (num <= 7) {
        led.plot(num % 4, 1)
    } else if (num <= 11) {
        led.plot(num % 4, 2)
    } else if (num <= 15) {
        led.plot(num % 4, 3)
    } else {
        basic.clearScreen()
    }
}
function scan (column: number) {
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        turn_led(column + 0)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        turn_led(column + 1)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        turn_led(column + 2)
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        turn_led(column + 3)
    } else {
        basic.clearScreen()
    }
}
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    scan(0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    scan(3)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    scan(7)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    scan(11)
})

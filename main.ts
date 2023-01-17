let y = 0
let x = 0
basic.forever(function () {
    y = pins.analogReadPin(AnalogPin.P3)
    x = pins.analogReadPin(AnalogPin.P0)
    if (x == 1023) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (x == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})

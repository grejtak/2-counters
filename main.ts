input.onButtonPressed(Button.A, function () {
    countA += 1
})
input.onButtonPressed(Button.B, function () {
    countB += 1
})
let countA = 0
let countB = 0
basic.forever(function () {
    if (countA >= 5) {
        led.plot(0, 4)
        if (countA >= 10) {
            led.plot(0, 3)
            if (countA >= 15) {
                led.plot(0, 2)
                if (countA >= 20) {
                    led.plot(0, 1)
                    if (countA >= 25) {
                        led.plot(0, 0)
                    }
                }
            }
        }
    }
})

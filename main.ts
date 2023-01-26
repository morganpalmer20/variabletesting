input.onButtonPressed(Button.A, function () {
    counter += 1
})
input.onButtonPressed(Button.AB, function () {
    counter = 0
})
input.onButtonPressed(Button.B, function () {
    counter += -1
})
let counter = 0
counter = 0
basic.forever(function () {
    basic.showNumber(counter, 70)
})

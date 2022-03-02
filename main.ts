input.onButtonPressed(Button.A, function () {
    maqueen.servoRun(maqueen.Servos.S1, 90)
    basic.showNumber(90)
})
input.onButtonPressed(Button.B, function () {
    maqueen.servoRun(maqueen.Servos.S1, 0)
    basic.showNumber(0)
})
basic.forever(function () {
	
})

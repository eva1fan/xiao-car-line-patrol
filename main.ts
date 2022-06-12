basic.showString("Hello")
music.playMelody("E B C5 A B G A F ", 120)
music.playMelody("A F E F D G E F ", 120)
music.playMelody("G C E C D G D C ", 120)
basic.showLeds(`
    . . # . .
    . . # . .
    . # # # .
    # . # . #
    . # # . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    # # . # #
    # # . # .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.showIcon(IconNames.Sword)
basic.forever(function () {
    Tinybit.Music_Car(Tinybit.enMusic.dadadum)
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 70)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 70)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 70)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 70)
    }
})

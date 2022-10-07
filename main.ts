let 等待指令时长 = 0
let 直行时长 = 0
basic.showLeds(`
    . . # . #
    . . # . #
    . . # . #
    . . . . #
    . . # . #
    `)
loops.everyInterval(200, function () {
    if (Tinybit.Voice_Sensor() > 100) {
        while (直行时长 < 5) {
            Tinybit.Music_Car(Tinybit.enMusic.entertainer)
            basic.showNumber(直行时长)
            if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
                Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 50)
                直行时长 += 1
            } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
                Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 50)
                直行时长 = 0
            } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
                Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 50)
                直行时长 = 0
            } else {
                Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
            }
        }
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else {
        等待指令时长 += 1
    }
})

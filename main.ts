//Maaske tilfoej vejledning

// Input -1 antal skridt for målet 1 = 1000 skridt
input.onButtonPressed(Button.A, function () {
    if (Aktiv_Antal_Skridt == 0) {
        Antal_Skridt += 0 - 1
        basic.showNumber(Antal_Skridt)
    } else {
        basic.showNumber(Aktiv_Antal_Skridt)
        Procent_completed()
    }
})
input.onButtonPressed(Button.AB, function () {
    // if Aktiv_Antal_Skridt = 0, gang 1000 med brugerens valgte antal skridt
    if (Aktiv_Antal_Skridt == 0) {
        Skridt_Goal = Antal_Skridt * 10
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else {
        control.reset()
    }
})
// Input +1 antal skridt for målet 1 = 1000 skridt
input.onButtonPressed(Button.B, function () {
    if (Aktiv_Antal_Skridt == 0) {
        Antal_Skridt += 1
        basic.showNumber(Antal_Skridt)
    } else {
        basic.showNumber(Aktiv_Antal_Skridt)
        Procent_completed()
    }
})
// Registrer bevægelse som et skridt
input.onGesture(Gesture.Shake, function () {
    Aktiv_Antal_Skridt += 1
    Skridt_Procent = Aktiv_Antal_Skridt / Skridt_Goal
    Procent_completed()
})

function Procent_completed () {
    if (Skridt_Procent < 0.2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (Skridt_Procent >= 0.2 && Skridt_Procent < 0.4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else if (Skridt_Procent >= 0.4 && Skridt_Procent < 0.6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Skridt_Procent >= 0.6 && Skridt_Procent < 0.8) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Skridt_Procent >= 0.8 && Skridt_Procent < 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        music.play(music.stringPlayable("C5 C5 B B E G E A ", 320), music.PlaybackMode.UntilDone)
        basic.showString("Woow you made it")
    }
}
let Skridt_Goal = 0
let Antal_Skridt = 0
let Skridt_Procent = 0
let Aktiv_Antal_Skridt = 0
led.setBrightness(175)
Aktiv_Antal_Skridt = 0

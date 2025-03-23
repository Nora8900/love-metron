input.onPinPressed(TouchPin.P0, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.LoopingInBackground)
    basic.showNumber(randint(0, 100))
    if (Math.sqrt(0) < 25) {
        basic.showIcon(IconNames.Heart)
    }
    game.gameOver()
})
basic.showString("Love metron")

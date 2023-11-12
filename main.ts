// external buttons
let PIN_BUTTON = DigitalPin.P19
let buttonState = 1
let lastDebounceTime = 0
let lastButtonState = 0
let TIME_DEBOUNCE = 30
pins.setPull(PIN_BUTTON, PinPullMode.PullUp)

let PIN_PRESSED = 0
let PIN_RELEASED = 1

//// DEBOUNCIONG
function debounceButton() {
    let currentTime = input.runningTime()

    let buttonRead = pins.digitalReadPin(PIN_BUTTON)
    if (buttonRead !== lastButtonState) {
        lastDebounceTime = currentTime
    }
    if (input.runningTime() - lastDebounceTime > TIME_DEBOUNCE) {
        if (buttonRead !== buttonState) {
            buttonState = buttonRead
            if (buttonState === PIN_PRESSED) {
                // button pressed
            } else {
                // button released
            }
        }
    }
    lastButtonState = buttonRead
}
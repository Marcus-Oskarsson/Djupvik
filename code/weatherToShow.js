export class WeatherShowing {
    constructor(length) {
        this.length = length
        this.currentlyShowing = 0
    }

    increase() {
        this.currentlyShowing += 1
        if (this.currentlyShowing === this.length) {
            this.currentlyShowing = 0
        }
    }
    decrease() {
        this.currentlyShowing -=1
        if (this.currentlyShowing < 0) {
            this.currentlyShowing = this.length - 1
        }
    }
    getCurrentlyShowing() {
        return this.currentlyShowing
    }

}
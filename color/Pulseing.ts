import RGB from "./RGB";
export default class Pulseing{
    public color: RGB;
    public startTime: number;
    public period: number;
    constructor(color,period,time){
        this.color = color;
        this.startTime = time||Date.now();
        this.period = period;
    }
    update(time){
        let timeOffset = time-this.startTime;;
        let percent = (timeOffset%this.period)/this.period;
        let multiplyer = 1-percent
        if(timeOffset%(this.period*2) < this.period){
            multiplyer = percent
        }
        let color = this.color.update(time)
        let brightness =Math.floor(color.brightness*multiplyer)
        let red = color.red
        let green = color.green;
        let blue = color.blue
        return {
            brightness,
            red,
            green,
            blue
        }
    }
}
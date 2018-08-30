import RGB from "./RGB";
class FadeOut{
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
        let percent = 1-(timeOffset/this.period);
        let multiplyer = percent
        if(percent < 0){
            multiplyer = 0;
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
module.exports = FadeOut;
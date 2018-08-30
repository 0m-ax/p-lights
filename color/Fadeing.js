class Fadeing{
    constructor(color1,color2,period,time){
        this.color1 = color1;
        this.color2 = color2;
        this.startTime = time || Date.now();
        this.period = period;
    }
    updatecolor(value1,value2,time){
        let timeOffset = time-this.startTime;;
        let percent = (timeOffset%this.period)/this.period;
        if((timeOffset%this.period)/this.period > 0.8){
        }

        if(timeOffset%(this.period*2) < this.period){
            return Math.floor(value1-((value1-value2)*percent))
        }
        return Math.floor(value2-((value2-value1)*percent))
    }
    update(time){
        let color1 = this.color1.update(time)
        let color2 = this.color2.update(time)
        let brightness =this.updatecolor(color1.brightness,color2.brightness,time)
        let red = this.updatecolor(color1.red,color2.red,time)
        let green = this.updatecolor(color1.green,color2.green,time)
        let blue = this.updatecolor(color1.blue,color2.blue,time)
        return {
            brightness,
            red,
            green,
            blue
        }
    }
}
module.exports = Fadeing;
class Sweep{
    constructor(angle1,angle2,period,time){
        this.angle1 = angle1;
        this.angle2 = angle2;
        this.startTime = time || Date.now();
        this.period = period;
    }
    update(time){
        let angle1 = this.angle1.update(time);
        let angle2 = this.angle2.update(time)
        let timeOffset = time-this.startTime;;
        let percent = (timeOffset%this.period)/this.period;
        if(timeOffset%(this.period*2) < this.period){
            return Math.floor(angle1-((angle1-angle2)*percent))
        }
        return Math.floor(angle2-((angle2-angle1)*percent))
    }
}
module.exports = Sweep;
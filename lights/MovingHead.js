const RGBW = require('../color/RGBW').default
const Angle = require('../movement/Angle')
const Percent = require('../Percent').default
class MovingHead {    
    static get XDegPer(){
        return 255/(180+360);
    }
    static get YDegPer(){
        return 255/(180+MovingHead.Yoffset*2);
    }
    static get Yoffset(){
        return 20;
    }
    constructor(color = new RGBW(255,255,255,255,255),x = new Angle(0),y = new Angle(0),speed = new Percent(1),strobe = new Percent(0)){
        this.color = color;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.strobe = strobe;
    }
    update(time){
        console.log(this.color)
        let color = this.color.update(time)
        //compute x
        let x = MovingHead.XDegPer*this.x.update(time)
        let DMX_x = Math.floor(x)
        let DMX_xFine = Math.round(255*(x-Math.floor(x)))
        //compute y
        let y = MovingHead.YDegPer*(this.y.update(time)+MovingHead.Yoffset);
        let DMX_y = Math.floor(y)
        let DMX_yFine = Math.round(255*(y-Math.floor(y)))
        //compute speed
        let speed = this.speed.update(time)
        let DMX_speed = 255-Math.round(speed*255)
        //compute strobe
        let strobe = this.strobe.update(time)
        let DMX_strobe = Math.round(strobe*255)    
        return [
            DMX_x,//x
            DMX_xFine,//fine x
            DMX_y,//y
            DMX_yFine,//fine y
            DMX_speed,//speed
            color.brightness,//total brightness
            DMX_strobe,//strobe
            color.red || 0,//red
            color.green || 0,//green
            color.blue || 0,//blue
            color.white || 0//white
        ]
    }
}
module.exports = MovingHead;
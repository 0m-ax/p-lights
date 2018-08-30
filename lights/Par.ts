import RGB from "../color/RGB";
import Percent from '../Percent'

export default class Par {
    public static params = ['RGB'];
    public static properties = {
        color:'RGB'
    }
    
    public color: RGB;
    public strobe: Percent;
    constructor(color){
        this.color = color || new RGB(0,0,0,0);
        this.strobe = new Percent(0)
    }
    update(time){
        let color = this.color.update(time)
        let strobe = this.strobe.update(time)
        let DMX_strobe = Math.round(strobe*255)    
        let output = [
            color.brightness || 255,
            DMX_strobe,//strobe?
            0,
            0,
            Math.floor(Math.pow(color.red/255,2)*255),
            Math.floor(Math.pow(color.green/255,2)*255),
            Math.floor(Math.pow(color.blue/255,2)*255)
        ]
        return output;
    }
}
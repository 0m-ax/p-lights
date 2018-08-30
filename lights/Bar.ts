import RGB from "../color/RGB";
import Percent from '../Percent'

export default class Bar {
    public static params = ['RGB'];
    public static properties = {
        color1:'RGB',
        color2:'RGB',
        color3:'RGB',
        color4:'RGB',
        color5:'RGB',
        color6:'RGB',
        color7:'RGB',
        color8:'RGB'
    }
    public color1: RGB;
    public color2: RGB;
    public color3: RGB;
    public color4: RGB;
    public color5: RGB;
    public color6: RGB;
    public color7: RGB;
    public color8: RGB;
    public strobe: Percent;
    constructor(color1,color2,color3,color4,color5,color6,color7,color8){
        this.color1 = color1 || new RGB(0,0,0,0);
        this.color2 = color2 || new RGB(0,0,0,0);
        this.color3 = color3 || new RGB(0,0,0,0);
        this.color4 = color4 || new RGB(0,0,0,0);
        this.color5 = color5 || new RGB(0,0,0,0);
        this.color6 = color6 || new RGB(0,0,0,0);
        this.color7 = color7 || new RGB(0,0,0,0);
        this.color8 = color8 || new RGB(0,0,0,0);
        
        this.strobe = new Percent(0)
    }
    update(time){
        let color1 = this.color1.update(time)
        let color2 = this.color2.update(time)
        let color3 = this.color3.update(time)
        let color4 = this.color4.update(time)
        let color5 = this.color5.update(time)
        let color6 = this.color6.update(time)
        let color7 = this.color7.update(time)
        let color8 = this.color8.update(time)
        let strobe = this.strobe.update(time);
        let DMX_strobe = Math.round(strobe*255)    
        return [
            color1.red,
            color1.green,
            color1.blue,
            color2.red,
            color2.green,
            color2.blue,
            color3.red,
            color3.green,
            color3.blue,
            color4.red,
            color4.green,
            color4.blue,
            color5.red,
            color5.green,
            color5.blue,
            color6.red,
            color6.green,
            color6.blue,
            color7.red,
            color7.green,
            color7.blue,
            color8.red,
            color8.green,
            color8.blue,
            DMX_strobe,
            255
        ]
    }
}
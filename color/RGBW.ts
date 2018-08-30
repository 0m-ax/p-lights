import RGB from "./RGB";
export default class RGBW extends RGB{
    public white: number;
    constructor(brightness,red,green,blue,white){
        super(brightness,red,green,blue)
        this.white = white;
    }
    update(time){
        return {
            "brightness":this.brightness,
            "red":this.red,
            "green":this.green,
            "blue":this.blue,
            "white":this.white
        }
    }
}